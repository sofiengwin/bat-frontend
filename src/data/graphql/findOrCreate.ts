import { FetchQl } from "../../lib/client";

const QUERY = `

`;

interface Response {
  user: any;
  error: any;
}

export interface IFindOrCreate {
  accessToken: string;
  tokenId: string; // signedRequest on facebook 
  providerId: string;
  name: string;
  email: string;
  imageUrl: string;
}


export default async function  findOrCreate(client: FetchQl, data: IFindOrCreate) {
  const response: Response = await client(QUERY, data as any);

  if (response.error) {
    console.log({response}, response.error)
  }

  return response.user;
}