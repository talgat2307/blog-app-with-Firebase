import axios from 'axios';

const axiosPosts = axios.create({
  baseURL: 'https://blog-app-59720.firebaseio.com/',
});

export default axiosPosts;