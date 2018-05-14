// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import { Place } from './Models';
import { PlaceCategory } from './Models';

// These are the initial data of places
// If foursquare API does not work, they will show only these information.

const Restaurant = new PlaceCategory('restaurant', 'Restaurants', 'fa-utensils');
const Mall = new PlaceCategory('mall', 'Malls', 'fa-shopping-cart');
const Sight = new PlaceCategory('sight', 'Sights', 'fa-camera-retro');
const Business = new PlaceCategory('business', 'Business', 'fa-building');

export const PLACES = [
    new Place('1', 'Koreana', 45.4107253, -75.7074882, Restaurant, '4bae3fabf964a5204c983be3'),
    new Place('2', 'Korean Palace Restaurant', 45.41214990466683, -75.7041734508883, Restaurant, '4d59cd9024466ea8be577b9f'),
    new Place('3', 'Dollarama', 45.41830436820669, -75.69081510157, Mall, '4eb1d09729c2b0499a87611d'),
    new Place('4', 'Elgin Street Diner', 45.41502262580002, -75.68792474187102, Restaurant, '4b0586e0f964a520d07222e3'),
    new Place('5', 'The Works', 45.40796289399408, -75.69125835549812, Restaurant, '4b09c2c5f964a520151d23e3'),
    new Place('6', 'Parliament of Canada', 45.424403152878895, -75.69899714867498, Sight, '4c7ab8d02d3ba143ba3492d0'),
    new Place('7', 'Shopify', 45.420362759402764, -75.69354607217116, Business, '4c572075a7d976b026a7dcee'),
    new Place('8', 'Tosca', 45.418880828620146, -75.69674170798635, Restaurant, '4b840967f964a520871c31e3'),
    new Place('9', 'Ottawa Public Library', 45.42026371162985, -75.69534202223649, Sight, '4b0ac306f964a5206e2723e3'),
];

export const CATEGORIES = [
    Restaurant,
    Mall,
    Sight,
    Business
];