import React, { Component } from 'react';

const UserContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        user: null
    }
	render() {
		return (
			<UserContext.Provider value={this.state}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}
