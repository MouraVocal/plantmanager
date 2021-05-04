import axios from'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.100:3333',
})

export default api;

//json-server ./src/services/server.json --host 10.0.0.100 --port 3333

//windows: ipconfig
//linux: ifconfig ver a informação inet