import apiService from './api-service';

export async function login(data) {
  return apiService.post(
		'/login',
		data
	);
};

export async function register(data) {
  return apiService.post(
		'/register',
		data
	);
};

export async function getUserInfo(userId) {
  return apiService.get(
		`/user/${userId}`
	);
};

export async function getAlbums(userId) {
  return apiService.get(
		`/album/user/${userId}`
	);
};