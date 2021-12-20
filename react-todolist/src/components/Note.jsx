import React from "react"

function Note(props) {
    function handleClick(){
        console.log("Deleting %s",props.id)
        props.onDelete(props.id)
    }

    return (
        <div className="note">
            <button type="button" onClick={handleClick}>x</button>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;