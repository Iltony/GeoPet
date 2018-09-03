import React, { Component } from 'react';

export class Mascotas extends Component {
	displayName = Mascotas.name

	constructor(props) {
		super(props);
		this.state = { forecasts: [], loading: true };

		fetch('api/SampleData/WeatherForecasts')
			.then(response => response.json())
			.then(data => {
				this.setState({ forecasts: data, loading: false });
			});
	}

	static renderForecastsTable(forecasts) {
		return (
			<div>
				<h1>Mascotas</h1>
				<table className='table'>
					<thead>
						<tr>
							<th>Date</th>
							<th>Temp. (C)</th>
							<th>Temp. (F)</th>
							<th>Summary</th>
						</tr>
					</thead>
					<tbody>
						{forecasts.map(forecast =>
							<tr key={forecast.dateFormatted}>
								<td>{forecast.dateFormatted}</td>
								<td>{forecast.temperatureC}</td>
								<td>{forecast.temperatureF}</td>
								<td>{forecast.summary}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}

	render() {
		let contents = this.state.loading
			? <p><em>Loading...</em></p>
			: Mascotas.renderForecastsTable(this.state.forecasts);

		return (
			<div>
				<h1>Weather forecast</h1>
				<p>This component demonstrates fetching data from the server.</p>
				{contents}
			</div>
		);
	}
}