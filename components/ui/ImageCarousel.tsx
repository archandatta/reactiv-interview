import { ImageCarouselType } from '@/types/Config';
import { getImageAspectRatio } from '@/utils/getImageSize';
import { Image } from 'expo-image';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel, {
	TCarouselProps,
	ILayoutConfig,
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
	return (
		<View style={styles.container}>
			<Carousel
				{...props}
				mode={mode}
				vertical={vertical}
				modeConfig={modeConfig}
				width={width}
				height={height}
				autoPlay={false}
				data={data.images}
				renderItem={({ item }: { item: string }) => (
					<RenderImage display={data.display} src={item} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
});

export default ImageCarousel;
