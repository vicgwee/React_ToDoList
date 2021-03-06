import React, {useState} from "react"
import ToggleSwitch from "./ToggleSwitch"
import {Fab, TextField} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

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
        <div className="note note--form">
            <form onSubmit={handleSubmit}>
                <TextField 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value = {inputs.title || ""}
                    onChange={handleChange}
                    fullWidth
                />
                <br></br>
                <TextField
                    name="content"
                    multiline
                    id="outlined-textarea"
                    placeholder="Content"
                    value = {inputs.content || ""}
                    onChange={handleChange}
                    fullWidth
                />
                <br></br>
                <Fab 
                    type="submit"
                    color="primary" 
                    aria-label="add"
                    className="note--form__fab"
                >
                    <AddIcon />
                </Fab>
                <ToggleSwitch 
                    name = "urgent"
                    checked = {parseInt(inputs.urgent) || 0}
                    onChange = {handleChange}
                />
            </form>
        </div>
    );
  }

export default AddNoteForm;