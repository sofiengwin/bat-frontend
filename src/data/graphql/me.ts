import { FetchQl } from "../../lib/client";

const QUERY = `

`;

interface Response {
  user: any;
  error: any;
}


export default async function loadUser (client: FetchQl, accessToken: string) {
  const response: Response = await client(QUERY, {accessToken});

  if (response.error) {
    console.log({response}, response.error)
  }

  return response.user;
}
