import { Country, Currency } from 'shared/constants/common';

type CurrencyType = typeof Currency[keyof typeof Currency];
type CountryType = typeof Country[keyof typeof Country];

export interface IProfile {
  name: string;
  surname: string;
  age: number;
  currency: CurrencyType;
  country: CountryType;
  city: string;
  nickname: string;
  avatar?: string;
}

export interface IProfileSchema {
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
}
