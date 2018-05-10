// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

export class Place {
    constructor(key, title, lat, lng, type) {
        this.key = key;
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.type = type;
        this.icon = 'fa-map-marker-alt';
    }
}

export default Place;