import { theme, themeDark } from '@/theme';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Direction, PaletteMode, ThemeProvider } from '@mui/material';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export const MUIWrapperContext = createContext({
  toggleColorMode: () => {},
  changeDirection: (dir: Direction) => {},
});

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: 'meaningless-key',
});

export const MUIWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [direction, setDirection] = useState<Direction>('ltr');

  const muiWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
      changeDirection: (dir: Direction) => {
        setDirection(dir);
      },
    }),
    [],
  );

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  const resultTheme = useMemo(() => {
    return mode === 'light' ? theme : themeDark;
  }, [mode]);

  return (
    <CacheProvider value={direction === 'rtl' ? cacheRtl : emptyCache}>
      <MUIWrapperContext.Provider value={muiWrapperUtils}>
        <ThemeProvider theme={resultTheme}>{children}</ThemeProvider>
      </MUIWrapperContext.Provider>
    </CacheProvider>
  );
};

export const useMUIValues = () => useContext(MUIWrapperContext);
