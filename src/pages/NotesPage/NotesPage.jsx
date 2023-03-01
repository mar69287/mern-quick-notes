import { useState, useEffect } from 'react'
import { getNotes } from '../../utilities/notes-api'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NoteCard from '../../components/NoteCard/NoteCard';

export default function NotesPage({ user }) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getAllNotes() {
            const notes = await getNotes();
            setNotes(notes);
        }
        getAllNotes();
    }, []);


    return (
        < div >
            <br />
            <NewNoteForm user={user} setNotes={setNotes} />
            <h2>My Notes</h2>
            {notes.map((note, idx) => (
                <NoteCard note={note} key={idx} />
            ))}
        </div >
    );
}