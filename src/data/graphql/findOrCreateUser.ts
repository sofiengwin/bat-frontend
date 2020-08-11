import { IUser } from "../../models/User";

export const QUERY = `
  mutation createUser($name: String, $email: String!, $accessToken: String, $tokenId: String, $providerId: String, $avatarUrl: String) {
    createUser(input: {name: $name, email: $email, accessToken: $accessToken tokenId: $tokenId, providerId: $providerId avatarUrl: $avatarUrl}) {
      userDetails {
        accessToken
        user {
          id
          name
          email
          avatarUrl
        }
      }
      errors {
        field
        code
      }
    }
  }
`;

export interface IFindOrCreate {
  accessToken: string;
  tokenId: string; // signedRequest on facebook 
  providerId: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Response {
  createUser: {
    accessToken: string;
    user: IUser;
    errors: any;
  }
}