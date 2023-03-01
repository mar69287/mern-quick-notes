export default function NoteCard({ note }) {

    return (
        <div>
            <h3>Date: {new Date(note.createdAt).toLocaleString()}</h3>
            <p>Note: {note.text}</p>
        </div>
    );
}