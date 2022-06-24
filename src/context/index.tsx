import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IColors } from '../types/colors';
import { IPropsContext, ITBContext } from '../types/context';
import { colorsDark, colorsWhite } from '../utils/template';

export const TBContext = createContext<ITBContext>({} as ITBContext);

const TBContextProvider = ({ children }: IPropsContext) => {
  const [bearerToken] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [colors, setColors] = useState({} as IColors);

  useEffect(() => setColors(darkMode ? colorsDark : colorsWhite), [darkMode]);

  const setMode = useCallback(() => setDarkMode((v) => !v), []);

  const state: ITBContext = useMemo(
    () => ({ bearerToken, darkMode, setMode, colors }),
    [bearerToken, darkMode, setMode, colors],
  );

  return <TBContext.Provider value={state}>{children}</TBContext.Provider>;
};

export default TBContextProvider;
