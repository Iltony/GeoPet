import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import './App.css'

export class PerdiMascota extends Component {
	
	displayName = PerdiMascota.name

	constructor(props) {
		super(props);
		this.state = {
			bingMapsKey: 'AkdTDUUzA1xA27bQiYIqsLFLBUPUrfpGY6SxbNQ70kdVua0HomPyx0b6dmjaygE9',
            pets: [],
            lostPet: null,
			currentLocation: null,
			lostLocationPushPin : [],
			loading: false,
			user: { email: 'pBarrios@adinet.com.uy' }
		};

        fetch(`api/PetController/byEmail?email=${this.state.user.email}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ ...this.state, lostPet: data[0].name, pets: data, loading: false });
            });
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

	renderPetsSelect(pets) {
        return (
			<div className="form-group center-block">
				<label htmlFor="selectPets" >Cual?</label>
				<select className="form-control lostPetsSelect" id='selectPets' onChange={this.setLostPetHandled.bind(this)}>
					{
						this.state.pets.map(pet => <option key={pet.name}>{pet.name}</option>)
					}
				</select>
			</div>
		);
	}
	
	setCurrentLocation(location){
		this.setState({ ...this.state, currentLocation: location, loadingMap: false });
	}

    setLostPetHandled(e) {
		this.setState({ ...this.state, lostPet: e.target.value })
    }

	getLocationHandled(location) {
		this.setState({ ...this.state, lostLocationPushPin: [
				{
				  "location":[location.latitude, location.longitude], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
				}
			  ]
		});
	}

	setLostPetButtonHandled(e) {

		const opts = {
			Email: this.state.user.email,
			Name: this.state.lostPet,
			Longitude: this.state.lostLocationPushPin.longitude,
			Latitude: this.state.lostLocationPushPin.latitude,
			LostDate: new Date()
		}

		fetch(`api/Lost`, {
			method: 'post',
			body: JSON.stringify(opts)
		})
		//.then(response => response.json())
		.then(data => {
			alert(`gracias, vamos a ayudarte a encontrar a ${this.state.lostPet}!!`);
		});
	}
	
	renderMap(currentLocation, bingmapKey, lostLocationPushPin) {
        
		const centerPoint = [];

		if (currentLocation)
			centerPoint.push(currentLocation.coords.latitude, currentLocation.coords.longitude);
		
			return (
                <ReactBingmaps
                    id="lostPetMap"
                    className="lostMyPetHereMap"
                    center = {centerPoint} 
				    bingmapKey={ bingmapKey }
                    pushPins={lostLocationPushPin}
                    zoom={16}
				    getLocation={{
						    addHandler: 'click', 
						    callback: this.getLocationHandled.bind(this)
					    }}
			    >
			    </ReactBingmaps>
		    );
	}

	render() {
		let contentsPets = this.state.loading
			? <p><em>Cargando...</em></p>
			: this.renderPetsSelect(this.state.pets);

		let contentsMap = this.state.loadingMap
            ? <p><em>Cargando...</em></p>
			: this.renderMap(this.state.currentLocation, this.state.bingMapsKey, this.state.lostLocationPushPin);

		let showButton = this.state.lostPet && this.state.lostLocationPushPin.length > 0
		return (
			<div>
                <h1>Se te perdió la mascota?</h1>
				{contentsPets}
				<p>Donde?</p>
				{contentsMap}

                {showButton && <button type="button" className="center-block btn btn-primary lostPetsButton" onClick={this.setLostPetButtonHandled.bind(this)}>Ayudame a encontrarlo</button>}
			</div>
		);
	}
}
