// __tests__/CallToAction.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CallToAction from '../ui/CallToAction';
import { openURL } from 'expo-linking';

jest.mock('expo-linking', () => ({
	openURL: jest.fn(),
}));

const configData = {
	label: 'Button',
	labelColor: '#FFFFFF',
	link: 'https://example.com',
	buttonColor: '#0000FF',
};

describe('<CallToAction />', () => {
	it('label text renders correctly with the rigth accessibility props and style', () => {
		const { getByText, getByRole } = render(<CallToAction data={configData} />);

		const labelText = getByText('Button');
		expect(labelText).toBeTruthy();

		// Check the button label style
		expect(labelText).toHaveStyle({
			color: configData.labelColor,
			fontSize: 16,
		});

		// Check Pressable accessibility props
		const pressable = getByRole('button');
		expect(pressable.props.accessibilityLabel).toBe(configData.label);
		expect(pressable.props.accessibilityRole).toBe('button');

    // Check the style to have the button background color
		expect(pressable).toHaveStyle({
			backgroundColor: configData.buttonColor,
		});
	});

	it('opens URL with correct link', () => {
		const { getByRole } = render(<CallToAction data={configData} />);

		const pressable = getByRole('button');
		fireEvent.press(pressable);

		expect(openURL).toHaveBeenCalledTimes(1);
		expect(openURL).toHaveBeenCalledWith(configData.link);
	});
});
