import React, { useState } from "react"

function Note(props) {
    const [done, setDone] = useState(0);

    function handleNoteClick(){
        setDone(val => 1-val);
        console.log("Clicked note %s, done is %i", props.id, done);
    }

    function handleDeleteButtonClick(){
        console.log("Deleting note id %s",props.id);
        props.onDelete(props.id);
    }

    let className = "note";
    className += " note--" + ((done)?"done":"not-done");
    //className += " note-- " + ((urgent)?"urgent":"not-urgent");

    return (
        <div className={className} onClick={handleNoteClick}>
            <button type="button" onClick={handleDeleteButtonClick}>x</button>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;