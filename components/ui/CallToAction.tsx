import { CallToActionType } from '@/types/Config';
import { openURL } from 'expo-linking';
import {
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View,
} from 'react-native';

interface ICallToActionProps extends PressableProps {
	data: CallToActionType;
}

const CallToAction = ({
	data: { label, labelColor, link, buttonColor },
	...props
}: ICallToActionProps) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={{ ...styles.pressable, backgroundColor: buttonColor }}
				onPress={() => openURL(link)}
				accessibilityLabel={label}
				accessibilityRole={'button'}
				{...props}
			>
				<Text
					style={{ color: labelColor, fontSize: 16 }}
					allowFontScaling={true}
				>
					{label}
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { justifyContent: 'center', alignItems: 'center' },
	pressable: {
		margin: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
		paddingHorizontal: 24,
		paddingVertical: 16,
	},
});

export default CallToAction;
