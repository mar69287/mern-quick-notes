import sendRequest from './send-request'
const BASE_URL = '/api/notes'

export async function createNote(noteData) {
    console.log("notedata inside users api")
    console.log(noteData)
    return sendRequest(BASE_URL, 'POST', noteData)

    // const res = await fetch(BASE_URL, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(noteData)
    // });
    // if (res.ok) {
    //     return res.json();
    // } else {
    //     throw new Error('Invalid Note');
    // }
}