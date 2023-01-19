import { IUser } from "../../models/User";

export const QUERY = `
  mutation createUser($name: String, $accessCode: String!, $approvedProviderAt: String) {
    createUser(input: {name: $name, accessCode: $accessCode approvedProviderAt: $approvedProviderAt}) {
      userDetails {
        accessToken
        user {
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
  accessCode?: string;
  name?: string;
  approvedProviderAt?: string;
}

export interface Response {
  createUser: {
    userDetails: {
      accessToken: string;
      user: IUser;
    }
    errors: any;
  }
}
