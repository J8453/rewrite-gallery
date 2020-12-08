import apiService from './api-service';

export async function addAlbum(data) {
  return apiService.post(
		'/album',
		data
	);
};

export async function deleteAlbum(albumId) {
  return apiService.delete(
		'/album',
		{
			data: {
				idArr: [albumId],
			},
		}
	);
};
