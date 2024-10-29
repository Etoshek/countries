import { CountryObject } from './datatype';

export type SearchTypes = {
	id: string;
} & Pick<CountryObject, 'capital' | 'name' | 'region'>;

export type RegionSearchTypes = Pick<CountryObject, 'region'>;

export interface CountryOption {
    value: string; 
    label: string;  
    region: string; 
  }
  
  export interface GroupedCountryOption {
    label: string;
    options: CountryOption[]; 
  }
