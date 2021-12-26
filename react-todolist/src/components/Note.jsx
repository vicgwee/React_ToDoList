import React, { useState } from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

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
            <IconButton color="primary" onClick={handleDeleteButtonClick} aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;