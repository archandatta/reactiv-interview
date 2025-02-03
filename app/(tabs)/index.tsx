import ImageCarousel from '@/components/ui/ImageCarousel';
import { useConfig } from '@/hooks/useConfig';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
	const config = useConfig();

	return (
		<SafeAreaView>
			<ImageCarousel data={config?.carousel} />
		</SafeAreaView>
	);
};

export default HomeScreen;
