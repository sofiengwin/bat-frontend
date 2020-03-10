import {FetchQl} from '../../lib/client';

const QUERY = ``;

export default async (client: FetchQl, data: any) => {
  const response = client(QUERY, data)

  return response;
}