import { Config } from '@/types/Config';
import { createContext } from 'react';

export interface ConfigContextType {
	config: Config;
	setConfig: React.Dispatch<React.SetStateAction<Config>>;
}

export const ConfigContext = createContext<ConfigContextType | undefined>(
	undefined
);
