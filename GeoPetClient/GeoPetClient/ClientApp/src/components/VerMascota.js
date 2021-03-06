import React, { Component } from 'react';

export class VerMascota extends Component {
	displayName = VerMascota.name
	
	getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}    
	nameSt = this.getParameterByName('name');
	emailSt = this.getParameterByName('email');
	constructor(props) {
		super(props);
		this.state = { forecasts: [], loading: true };
	
		
		debugger;
		fetch(`api/PetController/ByEmailName?name=${this.nameSt}&email=${this.emailSt}`)
			.then(response => response.json())
			.then(data => {
				this.setState({ forecasts: data, loading: false });
			});
	}

	static renderForecastsTable(forecast) {
		return (
			<div style={{ 'width': '500px' }}>
				<h1>Datos de la mascota</h1>
				<div class="form-group">
					<label for="exampleInputEmail1">Nombre</label>
					<div class="alert" role="alert">
						{forecast.name}
					</div>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Raza</label>
					<div class="alert" role="alert">
						{forecast.race}
					</div>
				</div>
				<div class="form-check">
				<label for="exampleInputPassword1">Nacimiento</label>
					<div class="alert" role="alert">
						{forecast.birthdate}
					</div>
				</div>

				<img src={forecast.imageUrl} alt="Mascota encontrada"/>

			</div>
		);
	}

	render() {
		let contents = this.state.loading
			? <p><em>Loading...</em></p>
			: VerMascota.renderForecastsTable(this.state.forecasts);

		return (
			<div>
							
				{contents}
			</div>
		);
	}
}
