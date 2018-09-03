import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Mascotas } from './components/Mascotas';
import { PerdiMascota } from './components/PerdiMascota';
import { EncontreMascota } from './components/EncontreMascota';
import { LogIn } from './components/LogIn';
import { VerMascota } from './components/VerMascota';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {user: null};
	}
	displayName = App.name
	user = null
	setUser(user)
	{
		this.setState({...this.state, user: user})		
	}
	render() {
		return (
			<Layout>
				<Route exact path='/' component={LogIn} />

				<Route exact path='/home' component={Home} />
				<Route path='/counter' component={Counter} />
				<Route path='/fetchdata' component={FetchData} />

				<Route path='/mascotas' component={Mascotas}/>
				<Route path='/perdi-mascota' component={PerdiMascota} />
				<Route path='/encotre-mascota' component={EncontreMascota} />
				<Route path='/ver-mascota' component={VerMascota} />
			</Layout>
		);
	}
}