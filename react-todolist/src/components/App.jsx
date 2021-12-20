import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import AddNoteForm from "./AddNoteForm.jsx";
import defaultNotes from "../defaultNotes.js";

function App() {
    const [notes, setNotes] = useState(defaultNotes);

    function addNote(newNote) {
        setNotes((prevNotes) => [...prevNotes, newNote])
    }

    function deleteNoteById(id) {
        setNotes(
            prevNotes => prevNotes.filter(
                note => note.id !== id
            )
        )
    }

    function renderNote(note) {
        return <Note 
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
        deleteNoteById={deleteNoteById}
        />;
    }

    return <div>
        <Header />
        <AddNoteForm nextId={notes.length} addNote={addNote}/>
        {notes.map(renderNote)}
        <Footer />
    </div>;
}

export default App;
