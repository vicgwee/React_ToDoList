import React from "react"

function Note(props) {
    function deleteNote(){
        console.log("Deleting %s",props.id)
        props.deleteNoteById(props.id)
    }

    return <div className="note">
    <button type="button" onClick={deleteNote}>x</button>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    </div>;
}

export default Note;