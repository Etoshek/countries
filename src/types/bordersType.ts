import { CountryObject } from './datatype';

export type BordersType = Pick<CountryObject, 'borders'>;
export type BorderType = Pick<CountryObject, 'alpha3Code'>;
