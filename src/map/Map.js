// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';
import ReactDOM from 'react-dom';
import { customMapStyle } from './MapStyle';

// Main component for Map
// It receives the google api object by props
export class Map extends React.Component {

    constructor(props) {
        super(props);
        this.map = null;

        if (!props.hasOwnProperty('google')) {
            throw new Error('You must include a `google` prop.');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    loadMap() {

        if (this.props && this.props.google) {
            const { google } = this.props;
            const { centerMap } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 14;
            let { lat } = centerMap;
            let { lng } = centerMap;

            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom,
                styles: customMapStyle,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
            })

            this.map = new maps.Map(node, mapConfig);

            this.setState({
                shouldLoadMarkers: true
            });
        }
    }

    renderChildren() {
        const {children} = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
            })
        });
    }

    render() {

        const style = {
            width: '100vw',
            height: '100vh'
        }

        return (
            <div>
                <div style={style} ref='map'></div>
                {this.renderChildren()}
            </div>
        )
    }
}

export default Map;