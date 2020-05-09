export interface FetchQl {
  (query: string, variables?: JSONSerializable, opts?: Dict<any>): Promise<any>;
}

interface GraphQLResponse {
  data: any;
  error: any;
}

const clientFactory = (endpoint: string, tokenGetter: () => string): FetchQl => {
  return function fetchQL(query: string, variables?: JSONSerializable, opts?: Dict<any>) {
    return fetch(endpoint, {
      method: 'POST',
      headers: new Headers({
        'Authorization': tokenGetter(),
        ...authHeaders()
      }),
      body: JSON.stringify({query, variables}),
      ...opts,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response;
      })
      .then<GraphQLResponse>(response => response.json())
      .then(({data, error}) => {
        if (error) {
          throw new Error();
        }

        return data;
      })
  }
}

const authHeaders = () => {
  return {
    'Content-Type': 'application/json'
  }
}

const RAPID_API_BASE = 'https://api-football-v1.p.rapidapi.com/v2'

export const rapidApiClient = (endpoint: string, options?: Dict<string>) => {
  return fetch(RAPID_API_BASE + endpoint, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '7850c93c7amshce44d177e4d57e3p18c434jsn758783b07818',
    }),
  })
    .then(response => {
      console.log({response})
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      return response;
    })
    .then(response => response.json())
    .then((response => response.api));
}

export default clientFactory;