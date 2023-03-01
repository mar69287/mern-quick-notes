import sendRequest from './send-request'
const BASE_URL = '/api/users'

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}

export async function createNote(noteData) {
    console.log("reached users-api")
    const res = await fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noteData)
    });
    if (res.ok) {
        // res.json() will resolve to the JWT
        return res.json();
    } else {
        throw new Error('Invalid Sign Up');
    }
}