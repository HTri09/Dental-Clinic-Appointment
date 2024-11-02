const axios = require('axios');
const { json } = require('sequelize');

const api = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/api/getAll/DichVu');

        for (let data of response.data) {
            console.log(data);
        }
        
    } catch (error) {
        console.log(error);
    }
}

api()