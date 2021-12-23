import React, {useState} from "react"
import ToggleSwitch from "./ToggleSwitch"
import {Button, TextField} from '@mui/material'

// Adapted from https://www.w3schools.com/react/react_forms.asp

function AddNoteForm(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(
            values => (
                {...values, [name]: value}
            )
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNote(
            {
                title:inputs.title,
                content: inputs.content,
                attributes: {
                    done: 0,
                    urgent: parseInt(inputs.urgent)
                }
            }
        );
    }
  
    return (
        <div className="note">
            <form onSubmit={handleSubmit}>
                <TextField 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value = {inputs.title || ""}
                    onChange={handleChange}
                />
                <TextField
                    name="content"
                    multiline
                    rows={3}
                    placeholder="Content"
                    value = {inputs.content || ""}
                    onChange={handleChange}
                />
                <ToggleSwitch 
                    name = "urgent"
                    checked = {inputs.urgent || 0}
                    onChange = {handleChange}
                />
                <Button type="submit">Add</Button>
            </form>
        </div>
    );
  }

export default AddNoteForm;