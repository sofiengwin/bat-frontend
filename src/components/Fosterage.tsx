import * as React from 'react';
import {useContext, useState} from 'react';

interface IFoster {
  foster: (component: React.ComponentType) => void;
  reset: () => void;
}

const FosterContext = React.createContext<IFoster>({foster: () => null, reset: () => null});

interface Props {
  children?: any;
}

const Fosterage: React.FC<Props> = ({children}) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const foster = (component: React.ComponentType) => setComponent(component);
  const reset = () => setComponent(null);

  return (
    <FosterContext.Provider value={{foster, reset}}>
      {Component && Component}
      {children}
    </FosterContext.Provider>
  );
};

export default Fosterage;

export const useFoster = () => {
  return useContext(FosterContext);
}