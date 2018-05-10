// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';

export class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { toggled: false }; 
    }

    handleClick(e) {
        let isToggled = !this.state.toggled;
        this.setState({
        toggled: isToggled
        });
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

        if (this.state.toggled) {
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