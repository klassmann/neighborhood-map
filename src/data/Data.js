// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import { Place } from './Models';
import { PlaceCategory } from './Models';


const Restaurant = new PlaceCategory('restaurant', 'Restaurants', 'fa-utensils');
const Mall = new PlaceCategory('mall', 'Malls', 'fa-shopping-cart');
const Sight = new PlaceCategory('sight', 'Sights', 'fa-camera-retro');
const Business = new PlaceCategory('business', 'Business', 'fa-building');

export const PLACES = [
    new Place('1', 'Koreana Restaurant', 45.4130133, -75.7040369, Restaurant, '4bae3fabf964a5204c983be3'),
    new Place('2', 'Korean Palace Restaurant', 45.4121026, -75.7039511, Restaurant, '4d59cd9024466ea8be577b9f'),
    new Place('3', 'Dollarama', 45.4170425, -75.6904327, Mall, '4eb1d09729c2b0499a87611d'),
    new Place('4', 'Elgin Street Diner', 45.4144217, -75.6903361, Restaurant, '4b0586e0f964a520d07222e3'),
    new Place('5', 'The WORKS Gourmet Burger Bistro', 45.4078491, -75.6913657, Restaurant, '4b09c2c5f964a520151d23e3'),
    new Place('6', 'Parliament of Canada', 45.4237852, -75.6987175, Sight, '4c7ab8d02d3ba143ba3492d0'),
    new Place('7', 'Shopify', 45.4225288, -75.6941681, Business, '4c572075a7d976b026a7dcee'),
    new Place('8', 'Tosca', 45.4204336, -75.6957714, Restaurant, '4b840967f964a520871c31e3'),
    new Place('9', 'Ottawa Public Library', 45.421633, -75.6948643, Sight, '4b0ac306f964a5206e2723e3'),
];

export const CATEGORIES = [
    Restaurant,
    Mall,
    Sight,
    Business
];