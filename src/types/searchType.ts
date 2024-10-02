import { CountryObject } from './datatype';

export type SearchTypes = {
	id: string;
} & Pick<CountryObject, 'capital' | 'name' | 'flags' | 'population' | 'region'>;
