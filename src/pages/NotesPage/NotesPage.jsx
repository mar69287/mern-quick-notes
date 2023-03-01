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
            {notes.length > 0 ? (
                <>
                    <h2>My Notes</h2>
                    {notes.map((note, idx) => (
                        <NoteCard note={note} key={idx} />
                    ))}
                </>
            ) : (
                <h2>No Notes Yet!</h2>
            )}
        </div >
    );
}