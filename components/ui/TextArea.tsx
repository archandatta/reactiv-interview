import { ITextArea } from '@/types/Config';
import { Text, View } from 'react-native';

const TextArea = ({
	data: { title, titleColor, description, descriptionColor },
}: {
	data: ITextArea;
}) => {
	return (
		<View style={{ marginTop: 0 }}>
			<Text style={{ color: titleColor }}>{title}</Text>
			<Text style={{ color: descriptionColor }}>{description}</Text>
		</View>
	);
};

export default TextArea;
