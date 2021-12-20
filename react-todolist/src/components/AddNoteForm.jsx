import React, {useState} from "react"

// From https://www.w3schools.com/react/react_forms.asp

function AddNoteForm(props) {
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.AddNoteForm({
            id:props.nextId.toString(),
            title:inputs.title,
            content: inputs.content
        });
    }
  
    return <div className="note">
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                placeholder="Title"
                value = {inputs.title || ""}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="content"
                placeholder="Content"
                value = {inputs.content || ""}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    </div>;
  }

export default AddNoteForm;