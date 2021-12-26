import React, { useState } from "react"
import {Button} from "@mui/material"

function Note(props) {

    function handleNoteClick(){
        console.log("Clicked note id %s", props.id);
        props.onClick(props.id);
    }

    function handleDeleteButtonClick(){
        console.log("Deleting note id %s", props.id);
        props.onDelete(props.id);
    }

    let className = "note";
    className += " note--" + ((props.attributes.done)?"done":"not-done");
    className += " note--" + ((props.attributes.urgent)?"urgent":"not-urgent");

    return (
        <div className={className} onClick={handleNoteClick}>
            <Button type="button" onClick={handleDeleteButtonClick}>x</Button>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;