import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Mascotas } from './components/Mascotas';
import { PerdiMascota } from './components/PerdiMascota';
import { EncontreMascota } from './components/EncontreMascota';

export default class App extends Component {
	displayName = App.name

	render() {
		return (
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/counter' component={Counter} />
				<Route path='/fetchdata' component={FetchData} />

				<Route path='/mascotas' component={Mascotas} />
				<Route path='/perdi-mascota' component={PerdiMascota} />
				<Route path='/encotre-mascota' component={EncontreMascota} />
			</Layout>
		);
	}
}
