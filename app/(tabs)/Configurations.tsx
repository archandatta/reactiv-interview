import { useConfig } from '@/hooks/useConfig';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import configOne from '../../assets/configurations/config-one.json';
import configTwo from '../../assets/configurations/config-two.json';
import configThree from '../../assets/configurations/config-three.json';
import { useRouter } from 'expo-router';
import { Config } from '@/types/Config';

const Configurations = () => {
	const navigation = useRouter();
	const { setConfig } = useConfig();

	const handleToggleConfig = (config: Config) => {
		setConfig(config);
		navigation.push('/');
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Pick Configuration to Test</Text>
			<Button
				title={'Configuration One'}
				onPress={() => handleToggleConfig(configOne)}
			/>
			<Button
				title={'Configuration Two'}
				onPress={() => handleToggleConfig(configTwo)}
			/>
			<Button
				title={'Configuration Three'}
				onPress={() => handleToggleConfig(configThree)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 600,
		marginBottom: 20,
	},
});

export default Configurations;
