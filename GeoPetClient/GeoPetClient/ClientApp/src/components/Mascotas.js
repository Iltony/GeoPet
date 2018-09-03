import React, { Component } from 'react';

export class Mascotas extends Component {
	displayName = Mascotas.name

	constructor(props) {
		super(props);
		this.state = { forecasts: [], loading: true };

		fetch('api/PetController/byEmail?email=fedelima@endava.com')
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
							<th>Nombre</th>
							<th>Tipo Mascota</th>
							<th>Raza</th>
							<th>Nacimiento</th>
						</tr>
					</thead>
					<tbody>
						{forecasts.map(forecast =>
							<tr key={forecast.email + forecast.name}>
								<td>{forecast.name}</td>
								<td>{forecast.type}</td>
								<td>{forecast.race}</td>
								<td>{forecast.birthdate}</td>
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
				{contents}
			</div>
		);
	}
}
