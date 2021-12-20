import React from "react"
import Note from "./Note";

function NewNote(props) {
    return <Note
        title=<input type="text" placeholder="Enter your title"/>
        content=<input type="text" placeholder="Enter your content"/>
    />;
}

export default NewNote;