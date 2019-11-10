import Axios from "axios";

const axios = require('axios');
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

Axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU2MjY0ODQ4OCwiZXhwIjoxNDk3NDQzNDA4OH0.GY0HpRi3xLmfb5pzQvnZdHCmQ2Xn7iXcwFBnLyWMa0OZuzRDTw7P1X417zTRAZHIafAOMgrUqjUhjzFqho-4uQ`;
export const findOne =
    (id) => {
        return axios
            .get(`${API_ENDPOINT}/${id}`)
            .then(response => response.data);
    };

