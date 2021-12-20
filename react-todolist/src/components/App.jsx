import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import AddNoteForm from "./AddNoteForm.jsx";
import defaultNotes from "../defaultNotes.js";

function App() {
    const [notes, setNotes] = useState(defaultNotes);

    let nextId = ((notes.length === 0) 
        ? 0
        : 1+notes
            .map((note) => parseInt(note.id))
            .reduce((a,b) => Math.max(a,b))
    );

    function addNote(newNote) {
        newNote.id = nextId.toString();
        nextId += 1; 
        console.log("Creating note id %s", newNote.id);
        setNotes(
            prevNotes => [...prevNotes, newNote]
        );
    }

    function deleteNoteById(id) {
        setNotes(
            prevNotes => prevNotes.filter(
                note => note.id !== id
            )
        );
    }

    function renderNote(note) {
        return (
            <Note 
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={deleteNoteById}
            />
        );
    }

    return (
        <div>
            <Header />
            <AddNoteForm 
                addNote={addNote}
            />
            {notes.map(renderNote)}
            <Footer />
        </div>
    );
}

export default App;
