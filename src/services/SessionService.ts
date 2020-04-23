import {observable, action} from 'mobx';
import User from '../models/User';
import loginCall from './apis/login';
import {FetchQl} from '../lib/client'

interface ISessionService {
  client: any;
  stores: any;
}

export default class SessionService {
  client: any;
  @observable user: User | null;

  constructor({client, stores}: ISessionService) {
    this.client = client;
    this.user = null;
  }

  @action
  login = async () => {
    this.user = await loginCall(this.client, {})
  }
}