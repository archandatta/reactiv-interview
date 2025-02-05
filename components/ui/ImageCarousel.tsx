import { ImageCarouselType, ImageDisplay } from '@/types/Config';
import { getImageAspectRatio } from '@/utils/getImageSize';
import { Image } from 'expo-image';
import { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel, {
	TCarouselProps,
	ILayoutConfig,
	ICarouselInstance,
} from 'react-native-reanimated-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;

const RenderImage = ({ display, src }: { display: string; src: string }) => {
	return (
		<View style={styles.imageContainer}>
			<Image
				style={{
					...styles.image,
					aspectRatio: getImageAspectRatio(display),
					height: display === ImageDisplay.portrait ? '100%' : undefined,
				}}
				contentFit={'cover'}
				source={src}
				placeholder={'assets/images/adaptive-icon.png'}
			/>
		</View>
	);
};

interface IImageCarouselProps
	extends Partial<
		Omit<TCarouselProps<string>, 'data' | 'mode' | 'modeConfig' | 'vertical'>
	> {
	data: ImageCarouselType;
	width?: number;
	height?: number;
	mode?: 'horizontal-stack' | 'vertical-stack' | undefined;
	vertical?: false;
	modeConfig?: ILayoutConfig;
}

const ImageCarousel = ({
	data,
	width = WINDOW_WIDTH,
	height = 500,
	mode,
	modeConfig,
	vertical,
	...props
}: IImageCarouselProps) => {
	const ref = useRef<ICarouselInstance>(null);

	return (
		<Carousel
			{...props}
			ref={ref}
			width={width}
			height={height}
			data={data.images.filter((i) => i !== '')}
			renderItem={({ item }: { item: string }) => (
				<RenderImage key={item} display={data.display} src={item} />
			)}
			style={{ backgroundColor: 'gray' }}
		/>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '100%',
	},
});

export default ImageCarousel;
