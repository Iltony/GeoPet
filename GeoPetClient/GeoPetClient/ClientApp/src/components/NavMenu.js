import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
	displayName = NavMenu.name

	render() {
		return (
			<Navbar inverse fixedTop fluid collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to={'/'}>GeoPet!</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to={'/mascotas'}>
							<NavItem>
								<Glyphicon glyph='th-list' /> Mascotas
                </NavItem>
						</LinkContainer>
						<LinkContainer to={'/perdi-mascota'}>
							<NavItem>
								<Glyphicon glyph='th-list' /> Perdi mi mascota!
                </NavItem>
						</LinkContainer>
						<LinkContainer to={'/encontre-mascota'}>
							<NavItem>
								<Glyphicon glyph='th-list' /> Encontre una mascota!
                </NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
