import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = { error: false }
    
    componentDidCatch() {
        this.setState({ error: true });
    }
    
    render() {
        if (this.state.error) {
            return <span>Error boundry indicator!</span>
        };

        return this.props.children;
    }
};

export default ErrorBoundry;