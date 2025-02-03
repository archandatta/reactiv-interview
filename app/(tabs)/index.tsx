import { ConfigContext } from '@/components/config/ConfigContext';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
	const config = useContext(ConfigContext);

	return (
		<SafeAreaView>
			<Text>{config?.textArea.title}</Text>
		</SafeAreaView>
	);
};

export default HomeScreen;
