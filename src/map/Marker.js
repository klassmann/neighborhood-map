// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';
import InfoWindow from './InfoWindow';


const defaultMarkerIcon = {
    path: "m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z",
    scale: 1.5,
    fillColor: "#69448E",
    fillOpacity: 1,
    strokeWeight: 0.4,
};

const selectedMarkerIcon = {
    path: "m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z",
    scale: 1.8,
    fillColor: "#8736d8",
    fillOpacity: 1,
    strokeWeight: 0.4,
};

// Responsible for controlling Maker on Map
// It receives the map and google api objects by props
export class Marker extends React.Component {

    constructor(props) {
        super(props);
        this.marker = null;
        this.onInfowindowClose = this.onInfowindowClose.bind(this);
        this.state = { showInfoWindow: false, marker: null };
    }

    componentDidMount() {
        if (this.props.map !== null) {
            this.renderMarker();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.map !== prevProps.map) {
            this.renderMarker();
        }
    }

    componentWillUnmount() {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }

    renderMarker() {
        let { google } = this.props;
        let { map } = this.props;
        let { lat } = this.props;
        let { lng } = this.props;

        let position = new google.maps.LatLng(lat, lng);

        const options = {
            map: map,
            position: position,
            icon: defaultMarkerIcon,
            animation: google.maps.Animation.DROP,
        };
        this.marker = new google.maps.Marker(options);
        this.marker.addListener('click', (e) => {
            this.onMarkerClick();
        });
    }

    onMarkerClick() {
        this.props.onMarkerClick(this.props.place);
    }

    onInfowindowClose(place) {
        this.props.onInfowindowClose(place);
        this.setState({
            showInfoWindow: false
        });
    }

    render() {
        if (this.marker !== null) {
            if (this.props.showInfoWindow) {
                this.marker.setIcon(selectedMarkerIcon);
            } else {
                this.marker.setIcon(defaultMarkerIcon);
            }
        }
        return (
            <div>
                <InfoWindow 
                    title={this.props.title} 
                    marker={this.marker} 
                    google={this.props.google}
                    map={this.props.map}
                    show={this.props.showInfoWindow}
                    place={this.props.place}
                    onInfowindowClose={this.onInfowindowClose}
                    />
            </div>
        );
    }
}


export default Marker;