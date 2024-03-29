export interface IUser {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
}

export const userFields = `
  id
  name
  email
  avatarUrl
`
