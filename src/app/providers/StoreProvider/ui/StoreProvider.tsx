import {createContext, ReactNode, useRef} from 'react';
import {RootStore} from '~/app/providers';

const StoreContext = createContext<RootStore | null>(null);

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = ({children}: StoreProviderProps) => {
  const rootStore = useRef(new RootStore()).current;

  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};
