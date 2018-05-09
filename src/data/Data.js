// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import { Place } from './Place';

export const PLACES = [
    new Place('1', 'Koreana Restaurant', 45.4130133, -75.7040369, 'restaurant'),
    new Place('2', 'Korean Palace Restaurant', 45.4121026, -75.7039511, 'restaurant'),
    new Place('3', 'Dollarama', 45.4170425, -75.6904327, 'mall'),
    new Place('4', 'Elgin Street Diner', 45.4144217, -75.6903361, 'restaurant'),
    new Place('5', 'The WORKS Gourmet Burger Bistro', 45.4078491, -75.6913657, 'restaurant'),
    new Place('6', 'Parliament of Canada', 45.4237852, -75.6987175, 'sight'),
    new Place('7', 'Shopify', 45.4225288, -75.6941681, 'business'),
    new Place('8', 'Tosca', 45.4204336, -75.6957714, 'restaurant'),
    new Place('9', 'Ottawa Public Library', 45.421633, -75.6948643, 'sight'),
];

export const PlaceCategories = [
    {
        id: 'restaurant',
        icon: 'fa-utensils',
        title: 'Restaurant'
    },
    {
        id: 'mall',
        icon: 'fa-shopping-cart',
        title: 'Mall'
    },
    {
        id: 'sight',
        icon: 'fa-camera-retro',
        title: 'Sights'
    },
    {
        id: 'business',
        icon: 'fa-building',
        title: 'Business'
    }
];