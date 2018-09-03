import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import './App.css'
import { debug } from 'util';

export class EncontreMascota extends Component {

	displayName = EncontreMascota.name
	name = ""
	getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	
	found(location) {

		var mascota = {
			"email" : "pBarrios@adinet.com.uy",
			"name" : this.name,
			"longitude" : location.coords.longitude,
			"latitude" : location.coords.latitude,
			"lostDate" : "09/03/2018"
		}
		
		fetch(`api/Found`, {
			method: 'post',
			body: JSON.stringify(mascota),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
		});
	}

	name = this.getParameterByName('name')
	constructor(props) {
		super(props);
		this.state = {
			bingMapsKey: 'AkdTDUUzA1xA27bQiYIqsLFLBUPUrfpGY6SxbNQ70kdVua0HomPyx0b6dmjaygE9',
			lostPet: null,
			currentLocation: null,
			lostLocationPushPin: [],
			loading: false
		};

		// fetch(`api/PetController/ByEmailName?name=${this.nameSt}&email=${this.emailSt}`)
		// .then(response => response.json())
		// .then(data => {
		// 	this.setState({ : data, loading: false });
		// });



		// emailSt = this.getParameterByName('email');
	}

	componentDidMount() {
		this.setState({ ...this.state, loadingMap: true });
		this.getLocation();
	}

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.setCurrentLocation.bind(this));
		}
	}

	setCurrentLocation(location) {
		this.setState({
			...this.state, currentLocation: location, loadingMap: false, 
			lostLocationPushPin: [
				{
					"location": [location.coords.latitude, location.coords.longitude], "option": { color: 'red' }
				}
			]
		});
	}

	setLostPetHandled(e) {
		this.setState({ ...this.state, lostPet: e.target.value })
	}	

	renderMap(currentLocation, bingmapKey, lostLocationPushPin) {

		const centerPoint = [];

		if (currentLocation)
			centerPoint.push(currentLocation.coords.latitude, currentLocation.coords.longitude);

		return (
			<ReactBingmaps
				id="lostPetMap"
				className="lostMyPetHereMap"
				center={centerPoint}
				bingmapKey={bingmapKey}
				pushPins={lostLocationPushPin}
				zoom={15}				
			>
			</ReactBingmaps>
		);
	}

	render() {

		let contentsMap = this.state.loadingMap
			? <p><em>Loading...</em></p>
			: this.renderMap(this.state.currentLocation, this.state.bingMapsKey, this.state.lostLocationPushPin);

		return (
			<div>
				<h1>Encontre a {this.name}!</h1>
				<p>Indique la ubicación donde fue encontrada su mascota:</p>
				{contentsMap}

				<button type="button" className="center-block btn btn-primary lostPetsButton" onClick={()=>this.found(this.state.currentLocation)}>Avisale a mis papis</button>
			</div>
		);
	}
}
