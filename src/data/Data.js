// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import { Place } from './Models';
import { PlaceCategory } from './Models';


const Restaurant = new PlaceCategory('restaurant', 'Restaurants', 'fa-utensils');
const Mall = new PlaceCategory('mall', 'Malls', 'fa-shopping-cart');
const Sight = new PlaceCategory('sight', 'Sights', 'fa-camera-retro');
const Business = new PlaceCategory('business', 'Business', 'fa-building');

export const PLACES = [
    new Place('1', 'Koreana Restaurant', 45.4130133, -75.7040369, Restaurant),
    new Place('2', 'Korean Palace Restaurant', 45.4121026, -75.7039511, Restaurant),
    new Place('3', 'Dollarama', 45.4170425, -75.6904327, Mall),
    new Place('4', 'Elgin Street Diner', 45.4144217, -75.6903361, Restaurant),
    new Place('5', 'The WORKS Gourmet Burger Bistro', 45.4078491, -75.6913657, Restaurant),
    new Place('6', 'Parliament of Canada', 45.4237852, -75.6987175, Sight),
    new Place('7', 'Shopify', 45.4225288, -75.6941681, Business),
    new Place('8', 'Tosca', 45.4204336, -75.6957714, Restaurant),
    new Place('9', 'Ottawa Public Library', 45.421633, -75.6948643, Sight),
];

export const CATEGORIES = [
    Restaurant,
    Mall,
    Sight,
    Business
];