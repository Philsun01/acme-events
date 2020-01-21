import React, {useState} from 'react';

const CreateEvent = ({list, setList}) => {

    const [title, setTitle] = useState('title');
    const [date, setDate] = useState('date');
    const [desc, setDesc] = useState('Some Text here');
    const [valid, setValid] = useState(false);
    const onSubmit = (ev) => {
        ev.preventDefault();
        const newEvent = {
            title,
            date,
            desc
        }
        setList([newEvent, ...list]); 
    }

    return (
        <div className = 'card'>
            <form name = 'eventInput' onSubmit = {onSubmit}>
                <div className = 'form-group'>
                    <label>Event Title</label>
                    <input  name = 'title' 
                            type = 'text' 
                            onChange = {ev => {
                                setTitle(ev.target.value)
                                }}
                            placeholder = 'title'
                            />
                </div>
                <div className = 'form-group'>
                    <label>Date</label>
                    <input  name = 'date' 
                            type = 'text' 
                            onChange = {ev => {
                                setDate(ev.target.value)
                                }} 
                            placeholder = 'date'
                            />
                </div>
                <div className = 'form-group'>
                    <label>Description</label>
                    <input  name = 'content'  
                            type = 'text' 
                            onChange = {ev => {
                                setDesc(ev.target.value)
                            }}
                            placeholder = 'description'
                            />
                </div>
                <button name = 'save' 
                        className = 'btn-primary'
                        disabled = {valid}
                        > Save </button> 
            </form>
        </div>
    )
}

export default CreateEvent;