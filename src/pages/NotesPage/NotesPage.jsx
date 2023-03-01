import { useState, useEffect } from 'react'
import { createNote } from '../../utilities/notes-api'
import { getNotes } from '../../utilities/notes-api'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NoteCard from '../../components/NoteCard/NoteCard';

export default function NotesPage({ user }) {
    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState([]);

    async function handleAddNote(evt) {
        evt.preventDefault();
        try {
            const note = await createNote({ text: newNote, user: user._id });
            setNewNote('');
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function getAllNotes() {
            const notes = await getNotes();
            setNotes(notes);
        }
        getAllNotes();
    }, []);


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
            {notes.map((note) => (
                <div>
                    text: {note.text} <br />
                    date: {new Date(note.createdAt).toLocaleDateString()}
                </div>
            ))}
        </div >
    );
}