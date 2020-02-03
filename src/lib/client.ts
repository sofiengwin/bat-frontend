const client = (data: any) => {
  return fetch('', {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data)
  })
}

const authHeaders = () => {
  return new Headers({
    'Content-Type': 'application/json'
  })
}

export default client;