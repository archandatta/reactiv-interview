import { ICallToAction } from '@/types/Config';
import { openURL } from 'expo-linking';
import { Pressable, PressableProps, Text } from 'react-native';

interface IButtonProps extends PressableProps {
	data: ICallToAction;
}

const CallToAction = ({
	data: { label, labelColor, link, buttonColor },
	...props
}: IButtonProps) => {
	return (
		<Pressable
			style={{ backgroundColor: buttonColor }}
			onPress={() => openURL(link)}
			{...props}
		>
			<Text style={{ color: labelColor }}>{label}</Text>
		</Pressable>
	);
};

export default CallToAction;
