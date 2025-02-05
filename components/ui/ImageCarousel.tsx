import { ImageCarouselType, ImageDisplay } from '@/types/Config';
import { getImageAspectRatio } from '@/utils/getImageSize';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel, {
	TCarouselProps,
	ILayoutConfig,
	ICarouselInstance,
} from 'react-native-reanimated-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;

const RenderImage = ({
	index,
	display,
	src,
}: {
	index: number;
	display: string;
	src: string;
}) => {
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
				accessibilityLabel={`carousel-image-${index}`}
				testID={`carousel-image-${index}`}
				allowDownscaling={true}
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
			renderItem={({ index, item }: { index: number; item: string }) => (
				<View style={{ flex: 1 }}>
					<LinearGradient
						colors={['#ffffff', '#f4f4f4']}
						style={styles.linearGradient}
					/>
					<RenderImage
						key={item}
						index={index}
						display={data.display}
						src={item}
					/>
				</View>
			)}
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
	linearGradient: { position: 'absolute', width: '100%', height: '100%' },
});

export default ImageCarousel;
