import {observable} from 'mobx';
import {IUser} from '../models/User';;

interface ISessionService {
  client: any;
  stores?: any;
}


export default class SessionService {
  client: any;
  @observable user: IUser | null;

  constructor({client, stores}: ISessionService) {
    this.client = client;
    this.user = null;
  }

  // @action async facebook(client: any, data: any) {
  //   await client({
  //     name: data.name,
  //     email: data.email,
  //     accessToken: data.accessToken,
  //     tokenId: data.signedRequest,
  //     providerId: data.userId,
  //     imageUrl: data.picture.url,
  //   })
  // }

  // @action async google(client: any, data: any) {
  //   await client({
  //     name: data.profileObj.name,
  //     email: data.profileObj.email,
  //     accessToken: data.accessToken,
  //     tokenId: data.tokenId,
  //     providerId: data.profileObj.googleId,
  //     imageUrl: data.profileObj.imageUrl,
  //   })
  // }

  // @action async login(data: IUser) {
    
  // }

  // @action async restoreSession() {
  //   if (this.user) {
  //     return;
  //   }
  //   const accessToken = localStorage.getItem('session');

  //   if (!accessToken) {
  //     throw 'No Access token';
  //   }

  //   this.user = await meCall(this.client, accessToken)
  // }
}