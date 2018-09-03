import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';


export class LogIn extends Component {

	login() {
		document.location.href = '/home'
	}
	render() {
		return (
			<div style={{ 'width': '300px', 'margin': '0 auto', 'paddingTop': '100px' }}>
				<h1> Log in </h1>
				<div className="form-group">
					<input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
				</div>
				<div className="form-group">
					<input type="password" className="form-control" id="inputPassword" placeholder="Password" />
				</div>
				<div className="forgot">
					<a href="reset.html">Forgot password?</a>
				</div>
				<button onClick={() => this.login()} className="btn btn-primary">Login</button>
			</div>
		);
	}
}
