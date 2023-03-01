import { getToken } from './users-service'

export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    console.log("inside payload")
    console.log(payload)
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken()
  if (token) {
    options.headers ||= {}
    options.headers.Authorization = `Bearer ${token}`
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set is not 2xx
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}              
