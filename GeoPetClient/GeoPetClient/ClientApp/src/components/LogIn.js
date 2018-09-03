import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';


export class LogIn extends Component {
	
	login() {
		//App.loggedUser = {}		
		//App.loggedUser.email = document.getElementById("inputEmail").value
		//App.loggedUser.password = document.getElementById("inputPassword").value
		document.location.href = '/home'
	}
	render() {
		return (
			<div style={{ 'width': '300px', 'margin': '0 auto', 'padding-top': '100px' }}>
				<h1> Log in </h1>
				<div class="form-group">
					<input type="email" class="form-control" id="inputEmail" placeholder="Email Address" />
				</div>
				<div class="form-group">
					<input type="password" class="form-control" id="inputPassword" placeholder="Password" />
				</div>
				<div class="forgot">
					<a href="reset.html">Forgot password?</a>
				</div>
				<button onClick={() => this.login()} class="btn btn-primary">Login</button>
			</div>
		);
	}
}
