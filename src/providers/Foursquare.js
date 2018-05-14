// Foursquare API Provider
// Provides the basic methods for accessing the API


const URL = 'https://api.foursquare.com/v2/';
const CLIENT_ID = '2W4RQXDZQKCQPKKZ1TSAU2V5FR5HDCIJ1UWEDIQW5E1MFJGP';
const CLIENT_SECRET = 'MTWIJOF2XGMSIQEBMKBXWCRLXDEJJ2OZR55Q2UZO50GBX31I';

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