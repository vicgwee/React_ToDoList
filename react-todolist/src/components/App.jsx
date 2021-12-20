import React from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx";

function App() {
    return <div>
        <Header />
        <Note header="This is a note" content="Note about something"/>
        <Footer />
    </div>;
}

export default App;
