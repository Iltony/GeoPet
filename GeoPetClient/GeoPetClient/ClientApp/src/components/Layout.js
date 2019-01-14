import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
	displayName = Layout.name
	
	render() {
		return (
			<Container fluid>
				<Row>
					<Col sm={3}>
						<NavMenu />
					</Col>
					<Col sm={9}>
						{this.props.children}
					</Col>
				</Row>
			</Container>
		);
	}
}
