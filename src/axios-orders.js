import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-react-89b84.firebaseio.com/'
});

export default instance;