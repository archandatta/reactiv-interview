import { ImageDisplay } from '@/types/Config';

/**
 * Gets aspect ratio given a display type
 * @param display - The display type of the images
 * @returns an aspect ratio correlating to the type
 */
export const getImageAspectRatio = (display: string) => {
	switch (display) {
		case ImageDisplay.landscape:
			return 16 / 9;
		case ImageDisplay.portrait:
			return 9 / 12;
		case ImageDisplay.square:
		default:
			return 1 / 1;
	}
};
