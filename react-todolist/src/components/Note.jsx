import React, { useState } from "react"

function Note(props) {
    const [done, setDone] = useState(0);

    function handleNoteClick(){
        console.log("Clicked note %s, done is %i", props.id, done);
        props.onClick(props.id);
    }

    function handleDeleteButtonClick(){
        console.log("Deleting note id %s",props.id);
        props.onDelete(props.id);
    }

    let className = "note";
    className += " note--" + ((props.attributes.done)?"done":"not-done");
    className += " note--" + ((props.attributes.urgent)?"urgent":"not-urgent");

    return (
        <div className={className} onClick={handleNoteClick}>
            <button type="button" onClick={handleDeleteButtonClick}>x</button>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;