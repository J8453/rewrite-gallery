import axios from 'axios';

// create an axios instance
const apiService = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
});

// interceptors
apiService.interceptors.request.use(
  (config) => {
	config.headers['Content-Type'] = 'application/json';
    config.headers['Accept'] = 'application/json';
    // config.headers['Authorization'] = 'Client-ID 329e78071fa9118';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
