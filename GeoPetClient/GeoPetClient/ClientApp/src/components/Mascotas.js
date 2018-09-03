import React, { Component } from 'react';

export class Mascotas extends Component {
	displayName = Mascotas.name


	constructor(props) {
		super(props);
		this.state = { forecasts: [], loading: true };

		fetch('api/PetController/byEmail?email=pBarrios@adinet.com.uy')
			.then(response => response.json())
			.then(data => {
				this.setState({ forecasts: data, loading: false });
			});
	}

	static renderForecastsTable(mascotas) {
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
						{mascotas.map(mascota =>
							<tr key={mascota.email + mascota.name}>
								<td>{mascota.name}</td>
								<td>{mascota.type}</td>
								<td>{mascota.race}</td>
								<td>{mascota.birthdate}</td>
								<td>
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => (document.location.href = `/ver-mascota?name=${mascota.name}&email=${mascota.email}`)}
									>Entrar
								</button>
								</td>
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
