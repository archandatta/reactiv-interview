import { ConfigContext } from '@/components/config/ConfigContext';
import { useContext } from 'react';

export const useConfig = () => {
	const context = useContext(ConfigContext);
	if (context === undefined) {
		throw new Error('useMyContext must be used within a MyProvider');
	}
	return context;
};
