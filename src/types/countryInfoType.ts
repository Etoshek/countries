import { CountryObject } from './datatype';

export type CountryInfoType = Pick<
	CountryObject,
	| 'currencies'
	| 'languages'
	| 'capital'
	| 'name'
	| 'flags'
	| 'population'
	| 'subregion'
	| 'region'
	|'demonym'
>