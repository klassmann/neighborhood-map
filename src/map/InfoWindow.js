// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';

// Responsible for controlling InfoWindow of a Marker
export class InfoWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            detail: '',
            twitter: '',
            url: '',
            phone: '',
            phoneFormatted: '',
            foursquareLoaded: false,
            foursquareError: false
        }
    }

    componentDidMount() {
        let { place } = this.props;
        place.getDetail().then((response) => {
            let venue = response.response.venue;

            let { name } = venue;
            let { description } = venue;
            let { twitter } = venue.contact;
            let { instagram } = venue.contact;
            let { facebookUsername } = venue.contact;
            let { phone } = venue.contact;
            let { url } = venue;
            let { formattedPhone } = venue.contact;
            let { bestPhoto } = venue;
            let { prefix } = bestPhoto;
            let { suffix } = bestPhoto;
            var photoUrl = null;

            if (prefix && suffix) {
                photoUrl = `${prefix}original${suffix}`;
            }

            this.setState({
                title: name,
                description: description,
                twitter: twitter,
                facebook: facebookUsername,
                instagram: instagram,
                url: url,
                phone: phone,
                formattedPhone: formattedPhone,
                photo: photoUrl,
                foursquareLoaded: true
            });
        }).catch(() => {
            this.setState({
                foursquareError: true
            });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        let { show } = this.props;

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
        let { description } = this.state;
        let { twitter } = this.state;
        let { facebook } = this.state;
        let { instagram } = this.state;
        let { url } = this.state;
        let { foursquareLoaded } = this.state;
        let { foursquareError } = this.state;
        // let { phone } = this.state;
        // let { formattedPhone } = this.state;
        let { photo } = this.state;

        var facebookTemplate = "";
        var instagramTemplate = "";
        var twitterTemplate = "";
        var websiteTemplate = "";

        var template = `
            <h2 class="iw-title">${title}</h2>
        `;

        if (photo) {
            template += `<img title="${title}" class="iw-photo" src="${photo}" />`;
        }

        if (description) {
            template += `<p class="iw-description">${description}</p>`;
        }

        if (facebook) {
            facebookTemplate = `<a title="Facebook" class="iw-facebook" target="_blank" href="https://fb.com/${facebook}"><i class="fab fa-facebook-square"></i></a>`;
        }

        if (instagram) {
            instagramTemplate = `<a title="Instagram" clas="iw-instagram" target="_blank" href="https://instagram.com/${instagram}"><i class="fab fa-instagram"></i></a>`;
        }

        if (twitter) {
            twitterTemplate = `<a title="Twitter" class="iw-twitter" target="_blank" href="https://twitter.com/${twitter}"><i class="fab fa-twitter"></i></a>`;
        }

        if (url) {
            websiteTemplate = `<a title="Website" class="iw-website" target="_blank" href="${url}"><i class="fas fa-globe"></i></a>`;
        }

        var socialContainer = `
            <div class="iw-social">
                ${facebookTemplate}
                ${instagramTemplate}
                ${twitterTemplate}
                ${websiteTemplate}
            </div>
        `;

        template += socialContainer;

        if (foursquareLoaded) {
            template += `<p class="iw-powered">Powered by <a target="_blank" href="https://foursquare.com/">Foursquare</a>.</p>`
        } else if (foursquareError) {
            template += `<p class="iw-powered">Information from <a target="_blank" href="https://foursquare.com/">Foursquare</a> couldn't be loaded.</p>`
        }

        var templateContainer = `
        <div class="iw-container">
            ${template}
        </div>
        `;

        this.infowindow = new google.maps.InfoWindow({
            content: templateContainer,
            maxWidth: 250
        });

        this.infowindow.addListener('closeclick', (e) => {
            this.props.onInfowindowClose(this.state.place);
        });
    }

    render() {
        return null;
    }
}


export default InfoWindow;