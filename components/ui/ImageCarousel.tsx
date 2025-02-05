import { ImageCarouselType, ImageDisplay } from '@/types/Config';
import { getImageAspectRatio } from '@/utils/getImageSize';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import Carousel, {
	TCarouselProps,
	ILayoutConfig,
	ICarouselInstance,
} from 'react-native-reanimated-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;

interface IRenderImageProps {
	index: number;
	display: string;
	src: string;
}

const RenderImage = ({ index, display, src }: IRenderImageProps) => {
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
	height = 450,
	mode,
	modeConfig,
	vertical,
	...props
}: IImageCarouselProps) => {
	const [display, setDisplay] = useState(data.display);
	const ref = useRef<ICarouselInstance>(null);

	useEffect(() => setDisplay(data.display), [data.display]);

	return (
		<>
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
							display={display}
							src={item}
						/>
					</View>
				)}
			/>

			{/* BONUS */}
			<View style={styles.displayButtonContainer}>
				<Pressable onPress={() => setDisplay(ImageDisplay.landscape)}>
					<Ionicons
						name="tablet-landscape"
						size={24}
						color={display === ImageDisplay.landscape ? 'black' : 'gray'}
					/>
				</Pressable>
				<Pressable onPress={() => setDisplay(ImageDisplay.portrait)}>
					<Ionicons
						name="tablet-portrait"
						size={24}
						color={display === ImageDisplay.portrait ? 'black' : 'gray'}
					/>
				</Pressable>
				<Pressable onPress={() => setDisplay(ImageDisplay.square)}>
					<Ionicons
						name="square"
						size={24}
						color={display === ImageDisplay.square ? 'black' : 'gray'}
					/>
				</Pressable>
			</View>
		</>
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
	displayButtonContainer: {
		flexDirection: 'row',
		gap: 4,
		alignSelf: 'flex-end',
		marginRight: 16,
	},
});

export default ImageCarousel;
