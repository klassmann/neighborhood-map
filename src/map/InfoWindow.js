// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';

export class InfoWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            detail: '',
            twitter: '',
            url: '',
            phone: '',
            phoneFormatted: ''
        }
    }

    componentDidMount() {
        let { place } = this.props;
        // let resp = place.getDetail();
        // console.log(resp);
        place.getDetail().then((response) => {
            console.log(response);
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
                photo: photoUrl
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
        let { description } = this.state;
        let { twitter } = this.state;
        let { facebook } = this.state;
        let { instagram } = this.state;
        let { url } = this.state;
        let { phone } = this.state;
        let { formattedPhone } = this.state;
        let { photo } = this.state;


        var template = `
            <h2>${title}</h2>
        `;

        if (photo) {
            template += `<img style="width: 200px;" src="${photo}" />`;
        }

        if (description) {
            template += `<p>${description}</p>`;
        }

        if (facebook) {
            template += `<a target="_blank" href="https://fb.com/${facebook}"><i class="fab fa-facebook-square"></i></a>`;
        }

        if (instagram) {
            template += `<a target="_blank" href="https://instagram.com/${instagram}"><i class="fab fa-instagram"></i></a>`;
        }

        if (twitter) {
            template += `<a target="_blank" href="https://twitter.com/${twitter}"><i class="fab fa-twitter"></i></a>`;
        }

        if (url) {
            template += `<p>Website: <a target="_blank" href="${url}">${url}</a></p>`;
        }

        var templateContainer = `
        <div style="width: 300px;">
            ${template}
        </div>
        `;

        this.infowindow = new google.maps.InfoWindow({
            content: template
        });
    }

    render() {
        return null;
    }
}


export default InfoWindow;