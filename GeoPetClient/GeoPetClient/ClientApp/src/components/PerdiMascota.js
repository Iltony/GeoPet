import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import './App.css'

export class PerdiMascota extends Component {
	
	displayName = PerdiMascota.name

	constructor(props) {
		super(props);
		this.state = {
			bingMapsKey: 'AkdTDUUzA1xA27bQiYIqsLFLBUPUrfpGY6SxbNQ70kdVua0HomPyx0b6dmjaygE9',
            pets: [
				{name: 'pepe0'},
				{name: 'pepe1'},
				{name: 'pepe2'},
				{name: 'pepe3'}
			],
            lostPet: null,
			currentLocation: null,
			lostLocationPushPin : [],
			loading: false
		};

		// fetch(`api/PetController/GetPets/${this.props.user.mail}`)
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		this.setState({ ...state, { { pets: data, loading: false }});
		// 	});

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
				<label htmlFor="selectPets" >Elija la mascota:</label>
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
                    zoom={0}
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
			? <p><em>Loading...</em></p>
			: this.renderPetsSelect(this.state.pets);

		let contentsMap = this.state.loadingMap
			? <p><em>Loading...</em></p>
			: this.renderMap(this.state.currentLocation, this.state.bingMapsKey, this.state.lostLocationPushPin);

		return (
			<div>
                <h1>Se te perdió la mascota?</h1>
				{contentsPets}
				<p>Indíque la ubicación donde perdió su mascota:</p>
				{contentsMap}

                <button type="button" className="center-block btn btn-primary lostPetsButton">Vamos a Buscarlo</button>
			</div>
		);
	}
}
