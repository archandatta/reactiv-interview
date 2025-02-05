// __tests__/TextArea.test.tsx

import React from 'react';
import { render } from '@testing-library/react-native';
import TextArea from '../ui/TextArea';

const configData = {
	title: 'Test Title',
	titleColor: '#FF0000',
	description: 'Test Description',
	descriptionColor: '#00FF00',
};

describe('<TextArea />', () => {
	it('title renders correctly with the rigth accessibility props and style', () => {
		const { getByText } = render(<TextArea data={configData} />);

		// Get the title Text element by its content
		const titleText = getByText('Test Title');
		expect(titleText).toBeTruthy();

		// Check the accessibility props
		expect(titleText.props.accessibilityLabel).toBe('Test Title');
		expect(titleText.props.accessibilityRole).toBe('header');

		// Check the style
		expect(titleText).toHaveStyle({
			fontSize: 28,
			fontWeight: 600,
			color: configData.titleColor,
		});
	});

	it('description renders correctly with the rigth accessibility props and style', () => {
		const { getByText } = render(<TextArea data={configData} />);

		// Get the description Text element by its content
		const descriptionText = getByText('Test Description');
		expect(descriptionText).toBeTruthy();

		// Check the accessibility props
		expect(descriptionText.props.accessibilityLabel).toBe('Test Description');
		expect(descriptionText.props.accessibilityRole).toBe('header');

		// Check the style
		expect(descriptionText).toHaveStyle({
			fontSize: 18,
			color: configData.descriptionColor,
		});
	});
});
