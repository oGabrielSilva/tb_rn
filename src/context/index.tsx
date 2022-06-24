import React, { createContext, useCallback, useMemo, useState } from 'react';
import { IColors } from '../types/colors';
import { IPropsContext, ITBContext } from '../types/context';
import { colorsDark, colorsWhite } from '../utils/template';

export const TBContext = createContext<ITBContext>({} as ITBContext);

const TBContextProvider = ({ children }: IPropsContext) => {
  const [bearerToken] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [colors, setColors] = useState({} as IColors);

  const setMode = useCallback(() => {
    setDarkMode((v) => {
      setColors(!v ? colorsDark : colorsWhite);
      return !v;
    });
  }, []);

  const state: ITBContext = useMemo(
    () => ({ bearerToken, darkMode, setMode, colors }),
    [bearerToken, darkMode, setMode, colors],
  );

  return <TBContext.Provider value={state}>{children}</TBContext.Provider>;
};

export default TBContextProvider;
