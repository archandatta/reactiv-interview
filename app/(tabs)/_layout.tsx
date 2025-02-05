import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: 'absolute',
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<Ionicons name="home" size={28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Configurations"
				options={{
					title: 'Configurations',
					tabBarIcon: ({ color }) => (
						<Ionicons name="settings" size={28} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
