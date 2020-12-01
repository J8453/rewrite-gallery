import axios from 'axios';

// create an axios instance
const imageService = axios.create({
	baseURL: 'https://api.imgur.com/3/image',
  timeout: 30000,
});

// interceptors
imageService.interceptors.request.use(
  (config) => {
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers['Accept'] = 'application/json';
    config.headers['Authorization'] = 'Client-ID 329e78071fa9118';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

imageService.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default imageService;
