// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import { getDetail as fsDetail } from '../providers/Foursquare';

export class PlaceCategory {
    constructor(key, title, icon) {
        this.key = key;
        this.title = title;
        this.icon = icon;
    }
}

export class Place {
    constructor(key, title, lat, lng, type, foursquare_id) {
        this.key = key;
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.type = type;
        this.foursquare_id = foursquare_id;
        this.icon = 'fa-map-marker-alt';
        this.detail = null;
    }

    getDetail() {
        return fsDetail(this.foursquare_id);
        // .then((response) => {
        //     this.detail = response;
        // });
        // return this.detail;
    }
}

export default Place;