import fetchMock, {restore} from 'fetch-mock';
import {default as clientFactory} from '../client';

describe('GraphQL fetch client', function () {
  afterEach(restore);

  it('works', async function () {
    const m = fetchMock.postOnce('http://www.example.com', {data: 'RESPONSE'});

    const client = clientFactory('http://www.example.com', () => 'fake.token');

    const response = await client('QUERY', {variable: 'bar'});
    const [_, req] = m.lastCall();
    const headers = req.headers as Headers;

    expect(req.method).toEqual('POST');
    expect(headers.get('content-type')).toEqual('application/json');
    expect(headers.get('authorization')).toEqual('fake.token');

    let body = JSON.parse(req['body'].toString());
    expect(body.query).toEqual('QUERY');
    expect(body.variables).toEqual({variable: 'bar'});
  
    expect(response).toEqual('RESPONSE');
  })

  it('throws error', async function () {
    fetchMock.postOnce('http://www.example.com', 500);

    const client = clientFactory('http://www.example.com', () => 'AUTH');

    await expect(client('QUERY')).rejects.toBeInstanceOf(Error);
  })
})