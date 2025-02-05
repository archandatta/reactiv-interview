import { ITextArea } from '@/types/Config';
import { StyleSheet, Text, View } from 'react-native';

const TextArea = ({
	data: { title, titleColor, description, descriptionColor },
}: {
	data: ITextArea;
}) => {
	return (
		<View style={styles.container}>
			<Text
				style={{ ...styles.title, color: titleColor }}
				allowFontScaling={true}
				accessibilityLabel={title}
				accessibilityRole={'header'}
			>
				{title}
			</Text>
			{description && (
				<Text
					style={{ ...styles.description, color: descriptionColor }}
					allowFontScaling={true}
					accessibilityLabel={description}
					accessibilityRole={'header'}
				>
					{description}
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: { gap: 4, margin: 16 },
	title: { fontSize: 28, fontWeight: 600 },
	description: { fontSize: 18 },
});

export default TextArea;
