import {observable, action} from 'mobx';
import User from '../models/User';
import loginCall from './apis/login';
import {FetchQl} from '../lib/client'
import findOrCreateCall, {IFindOrCreate} from '../data/graphql/findOrCreate';
import meCall from '../data/graphql/me';

interface ISessionService {
  client: any;
  stores?: any;
}


export default class SessionService {
  client: any;
  @observable user: User | null;

  constructor({client, stores}: ISessionService) {
    this.client = client;
    this.user = null;
  }

  @action async facebook(data: any) {
    await this.findOrCreate({
      name: data.name,
      email: data.email,
      accessToken: data.accessToken,
      tokenId: data.signedRequest,
      providerId: data.userId,
      imageUrl: data.picture.url,
    })
  }

  @action async google(data: any) {
    await this.findOrCreate({
      name: data.profileObj.name,
      email: data.profileObj.email,
      accessToken: data.accessToken,
      tokenId: data.tokenId,
      providerId: data.profileObj.googleId,
      imageUrl: data.profileObj.imageUrl,
    })
  }

  @action async findOrCreate(data: IFindOrCreate) {
    if (this.user) {
      return;
    }
    
    this.user = await findOrCreateCall(this.client, data)
    localStorage.setItem('session', 'this.user.')
  }

  @action async restoreSession() {
    if (this.user) {
      return;
    }
    const accessToken = localStorage.getItem('session');

    if (!accessToken) {
      throw 'No Access token';
    }

    this.user = await meCall(this.client, accessToken)
  }
}