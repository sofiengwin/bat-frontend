import {types, IModelType} from 'mobx-state-tree';

import Tip from './Tip';

interface Props {
  id: string;
  userName: string;
  email: string;
  tips: any[]
}

type UserModel = IModelType<any, any>

const UserProps: UserModel = types.model().props({
  id: types.identifier,
  userName: types.string,
  email: types.string,
  tips: types.optional(types.map(Tip), {})
});

const User = UserProps.named('Tip')

export type IUser = typeof User.Type