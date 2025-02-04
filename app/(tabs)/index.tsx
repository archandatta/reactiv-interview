import ImageCarousel from '@/components/ui/ImageCarousel';
import TextArea from '@/components/ui/TextArea';
import { useConfig } from '@/hooks/useConfig';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
	const config = useConfig();

	return (
		<SafeAreaView style={{ gap: 16 }}>
			<ImageCarousel data={config.carousel} />
			<TextArea data={config.textArea} />
			{/* // <Button title="test" /> */}
		</SafeAreaView>
	);
};

export default HomeScreen;
