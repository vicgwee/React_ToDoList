import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes"

function App() {
    return <div>
        <Header />
        <Note header={notes[0].header}
         content={notes[0].content}/>
        <Note header={notes[1].header}
         content={notes[1].content}/>
        <Footer />
    </div>;
}

export default App;
