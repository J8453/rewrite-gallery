import imageService from './api-service';

export async function uploadImageToImgur(data) {
  return imageService.post(
		'/',
		data
	);
};

export async function deleteImageFromImgur(deletehash) {
  return imageService.delete(
		deletehash
	);
};