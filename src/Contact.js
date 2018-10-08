import React, { Component } from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    removeOne() {
        this.setState({
            count: this.state.count -1
        });
    }

    addOne() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Bienvenue {this.props.maison}</h1>
                <p>Mon compteur: {this.state.count}</p>
                <button onClick={() => this.addOne()}>Ajouter 1</button>
                <button onClick={this.removeOne.bind(this)}>Enlever 1</button>
            </div>
        );
    }
}

export default Contact;