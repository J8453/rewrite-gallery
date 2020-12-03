import apiService from './api-service';

export async function login(username, password) {
  return apiService.post(
		'/login',
		{
			username,
			password,
		}
	);
};

export async function register(username, password) {
  return apiService.post(
		'/register',
		{
			username,
			password,
		}
	);
};