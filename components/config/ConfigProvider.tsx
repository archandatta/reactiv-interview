import { Config } from '@/types/Config';
import { ConfigContext } from './ConfigContext';
import { PropsWithChildren, useState } from 'react';

interface IConfigProviderProps extends PropsWithChildren {
	value: Config;
}

const ConfigProvider = ({ value, children }: IConfigProviderProps) => {
	const [config, setConfig] = useState<Config>(value);

	return (
		<ConfigContext.Provider value={{ config, setConfig }}>
			{children}
		</ConfigContext.Provider>
	);
};

export default ConfigProvider;
