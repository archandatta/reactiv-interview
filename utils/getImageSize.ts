export const getImageAspectRatio = (mode: string) => {
	switch (mode) {
		case 'landscape':
			return 16 / 8;
		case 'portrait':
			return 9 / 16;
		case 'square':
		default:
			return 1 / 1;
	}
};
