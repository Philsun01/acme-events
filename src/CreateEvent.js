import React, {useState} from 'react';
import moment from 'moment';

const CreateEvent = ({list, setList}) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('blank');
    const [desc, setDesc] = useState('');
    const [dateValid, setDateValid] = useState(false);
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
        
            <form name = 'create_event' onSubmit = {onSubmit}>

                <div className = 'form-group'>
                    <label>Event Title</label>
                    <input  name = 'title'
                            value = {title} 
                            type = 'text' 
                            onChange = {ev => {    
                                setTitle(ev.target.value); 
                                }}
                            />
                </div>

                <div className = 'form-group'>
                    <label>Date</label>
                    <input  name = 'date' 
                            value = {date}
                            type = 'text' 
                            onChange = {ev => {
                                setDate(ev.target.value);
                                setDateValid(moment(date,'MM/DD/YYYY',true).isValid());
                                }} 
                            
                            />
                    
                </div>

                <div className = 'form-group'>
                    <label>Description</label>
                    <input  name = 'content'
                            value = {desc}  
                            type = 'text' 
                            onChange = {ev => {
                                setDesc(ev.target.value);
                                
                            }}
                            
                            />
                </div>

                <button name = 'save' 
                        className = 'btn-primary'
                        > Save </button> 
            </form> 
        </div>
    )
}

export default CreateEvent;