const db = require("../config/connection");

const axios = require('axios');
import {createClient} from 'pixels';
const client = createClient(Oz06SuDy16K4QiXlrRDnX5WEYFKEw7iMwiDuJ19YCZ3pNWTCQofRILfK)
const query = 'bike racing'; 

API_KEY = 'Oz06SuDy16K4QiXlrRDnX5WEYFKEw7iMwiDuJ19YCZ3pNWTCQofRILfK';
const API_URL = 'https://images.pexels.com/lib/api/pexels.png';

const fetchData = async () => {
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
