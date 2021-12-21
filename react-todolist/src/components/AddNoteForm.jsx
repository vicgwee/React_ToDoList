import React, {useState} from "react"

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
                    urgent: inputs.urgent
                }
            }
        );
    }
  
    return (
        <div className="note">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value = {inputs.title || ""}
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    rows="3"
                    placeholder="Content"
                    value = {inputs.content || ""}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
  }

export default AddNoteForm;