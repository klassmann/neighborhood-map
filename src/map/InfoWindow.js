// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';

export class InfoWindow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        let {show} = this.props;

        if (prevProps.marker !== this.props.marker) {
            this.renderInfoWindow();
        }
        
        if (prevProps.show !== show) {
            if (show) {
                this.openWindow();
            } else {
                this.closeWindow();
            }
        }
    }

    openWindow() {
        this.infowindow.open(this.props.map, this.props.marker);
    }

    closeWindow() {
        this.infowindow.close();
    }

    renderInfoWindow() {
        let {google} = this.props;
        let {title} = this.props;

        this.infowindow = new google.maps.InfoWindow({
            content: '<h1>' + title + '</h1>'
        });
    }

    render() {
        return null;
    }
}


export default InfoWindow;