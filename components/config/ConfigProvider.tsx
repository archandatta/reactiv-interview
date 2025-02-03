import { Config } from '@/types/Config';
import { ConfigContext } from './ConfigContext';
import { PropsWithChildren } from 'react';

interface IConfigProviderProps extends PropsWithChildren {
	value: Config;
}

const ConfigProvider = ({ value, children }: IConfigProviderProps) => {
	return (
		<ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
	);
};

export default ConfigProvider;
