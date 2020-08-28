import * as React from 'react';
import {createContext, useContext, useState} from 'react';
import {IUser} from '../models/User';
import { useQuery } from '@apollo/react-hooks';
import meQuery from '../data/graphql/me';
import { gql, ApolloError } from 'apollo-boost';
import AppLoadingModal from './ui/AppLoadingModal';

interface IAppContext {
  user: IUser | null;
  addUser: (user: IUser) => void;
  removeUser: () => void;
  appLoading: boolean;
  setAppLoading: (isLoading: boolean) => void;
}

const AppContext = createContext<IAppContext>({
  user: null,
  addUser: () => null,
  removeUser: () => null,
  appLoading: false,
  setAppLoading: () => null
});

const App: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [appLoading, setAppLoading] = useState<boolean>(false);
  const addUser = (user: IUser) => setUser(user);
  const removeUser = () => setUser(null);

  const {loading} = useQuery(gql(meQuery), {
    onCompleted: (data: {me: IUser}) => {
      setUser(data.me);
    },
    onError: (error: ApolloError) => {
      console.log({error}, 'appolo error')
    }
  })
  // console.log({loading, error, data})

  return (
    <AppContext.Provider value={{user, addUser, removeUser, appLoading, setAppLoading}}>
      <AppLoadingModal visible={appLoading || loading} />
      {children}
    </AppContext.Provider>
  );
}

export default App;

export const useAppContext = () => {
  return useContext<IAppContext>(AppContext);
}