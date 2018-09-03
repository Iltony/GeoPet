import React, { Component } from 'react';

export class VerMascota extends Component {
	displayName = VerMascota.name
    
    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
	constructor(props) {
		super(props);
		this.state = { forecasts: [], loading: true };

		fetch('api/SampleData/WeatherForecasts')
			.then(response => response.json())
			.then(data => {
				this.setState({ forecasts: data, loading: false });
			});
	}

	static renderForecastsTable(forecast) {
		return (
			<div style={{ 'width': '500px', 'margin': '0 auto', 'paddingTop': '70px' }}>
                <h1>Datos de la mascota</h1>
				<div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <div class="alert alert-info" role="alert">
                        {forecast.name}
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <div class="alert alert-info" role="alert">
                        {forecast.race}
                    </div>
                </div>
                <div class="form-check">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    <div class="alert alert-info" role="alert">
                        {forecast.race}
                    </div>
                </div>
	
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
