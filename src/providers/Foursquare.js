// Foursquare API Provider
// Provides the basic methods for accessing the API


const URL = 'https://api.foursquare.com/v2/';
const CLIENT_ID = '';
const CLIENT_SECRET = '';

const headers = {
    'Accept': 'application/json',
    'mode': 'cors'
}

export const getDetail = (id) => 
    fetch(`${URL}/venues/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180510`, {...headers})
    .then(res => res.json())
    .then(data => data);

export const searchFor = (query, lat, lng) => 
    fetch(`${URL}/venues/search?query=${query}&ll=${lat},${lng}`, {...headers})
    .then(res => res.json())
    .then(data => data);