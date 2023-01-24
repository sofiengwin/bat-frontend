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

const RAPID_API_BASE = 'https://api-football-v1.p.rapidapi.com/v3'

export const rapidApiClient = (endpoint: string, options?: Dict<string>) => {
  return fetch(RAPID_API_BASE + endpoint, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'VXn6iAlAwImshiy4k4mBsAZKwzM4p1Aq5iUjsnDLHpy8F0jlSf',
    }),
  })
    .then(response => {
      console.log({response})
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      return response;
    })
    .then(response => {
      console.log('2', {response})
      return response.json()
    })
    .then((response => {
      console.log('3', {response}, Object.keys(response))
      return response.response
    }));
}

export const mockClient = (): FetchQl => {
  return (query: string, variables?: JSONSerializable, opts?: Dict<any>) => {
    console.log({query, variables, opts})

    return new Promise((resolve, _reject) => {
      // @ts-ignore
      resolve([]);
    })
  }
}

export default clientFactory;
