export const QUERY = `
  mutation createUser($name: String, $username: String!, $email: String!, $accessToken: String, $tokenId: String, $providerId: String, $avatarUrl: String) {
    createUser(input: {name: $name, username: $username, email: $email, accessToken: $accessToken tokenId: $tokenId, providerId: $providerId avatarUrl: $avatarUrl}) {
      user {
        id
        name
        username
        email
        avatarUrl
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
  imageUrl: string;
}