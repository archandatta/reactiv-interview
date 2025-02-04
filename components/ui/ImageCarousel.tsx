import { ImageCarouselType } from '@/types/Config';
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
				}}
				contentFit={'cover'}
				source={src}
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
	height = WINDOW_WIDTH / 2,
	mode,
	modeConfig,
	vertical,
	...props
}: IImageCarouselProps) => {
	const ref = useRef<ICarouselInstance>(null);

	return (
		<Carousel
			ref={ref}
			width={width}
			height={height}
			autoPlay={false}
			data={data.images}
			renderItem={({ item }: { item: string }) => (
				<RenderImage key={item} display={data.display} src={item} />
			)}
		/>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});

export default ImageCarousel;
