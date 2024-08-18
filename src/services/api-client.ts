import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ddcdbab8635848049e01fc1f600bdbda'
    }
});