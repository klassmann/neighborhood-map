// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';

// Responsible for controlling Toggle Button
export class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { toggled: false }; 
    }

    isToggled() {
        // Return the parent value
        if (this.props.toggleStateManagedByParent) {
            return this.props.toggled;
        }

        return this.state.toggled;
    }

    handleClick(e) {
        let isToggled = !this.props.toggled;
        
        if (!this.props.toggleStateManagedByParent) {   
            isToggled = !this.state.toggled;
            this.setState({
                toggled: isToggled
            });
        }

        if (isToggled) {
            this.props.onToggleOn(this.props.id);
        } else {
            this.props.onToggleOff(this.props.id);
        }
    }

    getIconClass() {
        return 'fas ' + this.props.icon;
    }

    render() {

        if (this.isToggled()) {
            return (
                <div onClick={this.handleClick} className="sb-toggle on">
                <i className={this.getIconClass()}></i>
                <span> {this.props.text}</span>
                </div>
            );
        }

        return (
        <div onClick={this.handleClick} className="sb-toggle off">
        <i className={this.getIconClass()}></i>
        <span> {this.props.text}</span>
        </div>
        );
    }
}

export default ToggleButton;