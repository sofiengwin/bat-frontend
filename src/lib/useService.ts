// @ts-nocheck
import {MobXProviderContext} from 'mobx-react';
import { useContext } from "react";
import SessionService from '../services/SessionService';

export interface Services {
  sessionService: SessionService;
}


export default () => {
  return useContext<Services>(MobXProviderContext);
}