import { ITextArea } from '@/types/Config';
import { Text, View } from 'react-native';

const TextArea = ({ data }: { data: ITextArea }) => {
	return (
		<View style={{ marginTop: 0 }}>
			<Text>{data.description}</Text>
		</View>
	);
};

export default TextArea;
