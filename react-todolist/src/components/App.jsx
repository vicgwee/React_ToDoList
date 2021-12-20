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

    function renderNote(note) {
        return <Note 
        key={note.id}
        title={note.title}
        content={note.content}/>;
    }

    return <div>
        <Header />
        <AddNoteForm nextId={notes.length} addNote={addNote}/>
        {notes.map(renderNote)}
        <Footer />
    </div>;
}

export default App;
