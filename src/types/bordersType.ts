import { CountryObject } from './datatype';

export type BordersType = Partial<Pick<CountryObject, 'name' | 'flag'| 'capital'>>;
export type BorderType = Pick<CountryObject, 'alpha3Code'>;
