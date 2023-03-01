import { useState } from 'react'
import { createNote } from '../../utilities/notes-api'

export default function NewNoteForm({ user, setNotes }) {
    const [newNote, setNewNote] = useState('');

    async function handleAddNote(evt) {
        evt.preventDefault();
        try {
            const note = await createNote({ text: newNote, user: user._id });
            setNotes(prevNotes => [...prevNotes, note]);
            setNewNote('');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        < div className='form'>
            <h4>Create a new note!</h4>
            <textarea
                value={newNote}
                onChange={(evt) => setNewNote(evt.target.value)}
                placeholder="Enter your note here..."
                rows={8}
                cols={30}
            />
            <button onClick={handleAddNote}>Save Note</button>
        </div >
    );
}