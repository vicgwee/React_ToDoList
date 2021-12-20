import React, {useState} from "react"
import notes from "../notes";

// From https://www.w3schools.com/react/react_forms.asp

function AddNote() {
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let nextId = notes.length + 1
        notes.push( {
            id:nextId.toString(),
            title:inputs.title,
            content: inputs.content
        });
        nextId += 1
        console.log(notes);
    }
  
    return <div className="note">
        <h1>New Note</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value = {inputs.title || ""}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="content"
                value = {inputs.content || ""}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    </div>;
  }

export default AddNote;