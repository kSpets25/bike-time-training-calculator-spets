const axios = require('axios');
import {createClient} from 'pixels';
const client = createClient(Oz06SuDy16K4QiXlrRDnX5WEYFKEw7iMwiDuJ19YCZ3pNWTCQofRILfK)
const query = 'bike racing'; 
//client.photo.search(({ query, per_page: 1}).then(photos => ):

API_KEY = 'Oz06SuDy16K4QiXlrRDnX5WEYFKEw7iMwiDuJ19YCZ3pNWTCQofRILfK';
//const API_URL = 'https://api.pexels.com/v1/curated?page=2&per_page=10';
const API_URL = 'https://images.pexels.com/lib/api/pexels.png';

const fetchData = async () => {
    console.log("fetchdata")
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (err) {
        console.error('Error tetching data from API:', err);
        throw err;
    }
    console.log(data)
};
console.log(data)


module.export = {fetchData}
