import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	NavbarToggler,
	Nav,
	NavLink,
	NavItem
	} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { library, icon, toHtml } from '@fortawesome/fontawesome-svg-core'
import './NavMenu.css';

export class NavMenu extends Component {
	displayName = NavMenu.name

	constructor(props) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.state = {
		  isOpen: false
		};
		
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		
		return (
			<div className="floating">
				<NavbarToggler onClick={this.toggle}>
					<div><FontAwesomeIcon icon={faThList} /></div>
				</NavbarToggler>	
				<Collapse isOpen={this.state.isOpen} >
					<Nav vertical>
						<NavItem>
							<NavLink tag={Link} to="/mascotas">Mascotas</NavLink>
						</NavItem>
						<NavItem>
								<NavLink tag={Link} to="/perdi-mascota">Perdi mi mascota!</NavLink>
						</NavItem>
						<NavItem>
								<NavLink tag={Link} to="/encontre-mascota">Encontre una mascota!</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</div>
		);
	}
}
