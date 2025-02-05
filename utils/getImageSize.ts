import { ImageDisplay } from '@/types/Config';

export const getImageAspectRatio = (mode: string) => {
	switch (mode) {
		case ImageDisplay.landscape:
			return 16 / 9;
		case ImageDisplay.portrait:
			return 9 / 12;
		case ImageDisplay.square:
		default:
			return 1 / 1;
	}
};
