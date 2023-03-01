import { useState } from 'react'
import { createNote } from '../../utilities/notes-api'

export default function NotesPage({ user }) {
    const [newNote, setNewNote] = useState('');

    async function handleAddNote(evt) {
        evt.preventDefault();
        // console.log(newNote)
        try {
            const note = await createNote({ text: newNote, user: user._id });
            setNewNote('');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        < div >
            <h2>My Notes</h2>
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