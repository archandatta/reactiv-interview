import { ConfigContext } from '@/components/config/ConfigContext';
import { useContext } from 'react';

/**
 * Hook to get the context from ConfigContext
 * @returns a valid context from ConfigContext
 */
export const useConfig = () => {
	const context = useContext(ConfigContext);
	if (context === undefined) {
		throw new Error('useConfig must be used within a ConfigProvider');
	}
	return context;
};
