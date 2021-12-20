import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes"
import AddNote from "./AddNote.jsx";

function createNote(note) {
    return <Note 
    key={note.id}
    title={note.title}
    content={note.content}/>;
}

function App() {
    return <div>
        <Header />
        <AddNote />
        {notes.map(createNote)}
        <Footer />
    </div>;
}

export default App;
