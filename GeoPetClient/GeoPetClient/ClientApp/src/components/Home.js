import React, { Component } from 'react';

export class Home extends Component {
	displayName = Home.name
	login() {
		this.loggedUser = {}
		this.loggedUser.email = document.getElementById("inputEmail").value
		this.loggedUser.password = document.getElementById("inputPassword").value
	}
	render() {		
		return (
			<div>
				<h1>Bienvenidos a GeoPet</h1>
				<p>La aplicacion ideal para:</p>
				<ul>
					<li>Listado de mascotas.</li>
					<li>Postear mascotas perdidas.</li>
					<li>Postear mascotas encontradas</li>
				</ul>
			</div>
		);
	}
}
