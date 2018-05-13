// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';

export class InfoWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            detail: '',
            twitter: '',
            url: ''
        }
    }

    componentDidMount() {
        let { place } = this.props;
        // let resp = place.getDetail();
        // console.log(resp);
        place.getDetail().then((response) => {
            console.log(response);
            this.setState({
                title: response.response.venue.name,
                detail: response.response.venue.description,
                twitter: response.response.venue.contact.twitter,
                url: response.response.venue.url
            });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        let { show } = this.props;
        let { place } = this.props;

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
        let { google } = this.props;
        let { title } = this.state;
        let { detail } = this.state;
        let { twitter } = this.state;
        let { url } = this.state;

        var template = `
            <h2>${title}</h2>
        `;

        if (detail) {
            template += `<p>${detail}</p>`;
        }

        if (twitter) {
            template += `<p>Twitter: <a target="_blank" href="https://twitter.com/${twitter}">@${twitter}</a></p>`;
        }

        if (url) {
            template += `<p>Website: <a target="_blank" href="${url}">${url}</a></p>`;
        }

        this.infowindow = new google.maps.InfoWindow({
            content: template
        });
    }

    render() {
        return null;
    }
}


export default InfoWindow;