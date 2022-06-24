import { ReactNode } from 'react';
import { IColors } from './colors';

export interface ITBContext {
  bearerToken: string;
  darkMode: boolean;
  setMode(): void;
  colors: IColors;
}

export interface IPropsContext {
  children: ReactNode;
}
