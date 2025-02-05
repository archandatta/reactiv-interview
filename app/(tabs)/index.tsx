import CallToAction from '@/components/ui/CallToAction';
import ImageCarousel from '@/components/ui/ImageCarousel';
import TextArea from '@/components/ui/TextArea';
import { useConfig } from '@/hooks/useConfig';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
	const { config } = useConfig();

	return (
		<SafeAreaView style={{ flex: 1, gap: 16, backgroundColor: 'white' }}>
			<TextArea data={config.textArea} />
			<ImageCarousel data={config.carousel} />
			<CallToAction data={config.callToAction} />
		</SafeAreaView>
	);
};

export default HomeScreen;
