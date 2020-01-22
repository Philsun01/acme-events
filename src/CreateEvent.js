import React, {useState} from 'react';
import moment from 'moment';

const CreateEvent = ({list, setList}) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [validTitle, setValidTitle] = useState(true);
    const [validDesc, setValidDesc] = useState(true);
    const [validDate, setValidDate] = useState(true);
    const onSubmit = (ev) => {
        ev.preventDefault();
        
        if(!moment(date,'MM/DD/YYYY',true).isValid()){
            setValidDate(false)
        } else { 
            setValidDate(true) 
        }

        if(!desc){ setValidDesc(false); 
            } else { setValidDesc(true); }
        
        if(!title){ setValidTitle(false); } 
            else { setValidTitle(true); }

        if( desc && title && moment(date,'MM/DD/YYYY',true).isValid()){
            const newEvent = {
                title,
                date,
                desc
            }
            setList([newEvent, ...list]);
            setDate('');
            setTitle('');
            setDesc('');
        }
         
    }
    
    return (
        <div className = 'card'>
        
            <form name = 'create_event' onSubmit = {onSubmit}>

                <div className = 'form-group'>
                    <label>Event Title</label>
                    <input  name = 'title'
                            value = {title} 
                            type = 'text' 
                            onChange = {ev => {setTitle(ev.target.value)} }
                            placeholder = 'title here' />
                    <div className = 'error'
                         hidden = {validTitle}>
                         Please enter a valid title</div>
                </div>

                <div className = 'form-group'>
                    <label>Date</label>
                    <input  name = 'date' 
                            value = {date}
                            type = 'text' 
                            onChange = {
                                    ev => {setDate(ev.target.value)}
                                } 
                            placeholder = 'MM/DD/YYYY' />
                    <div className = 'error'
                         hidden = {validDate}>
                         Please enter a date in MM/DD/YYYY format</div>
                </div>

                <div className = 'form-group'>
                    <label>Description</label>
                    <input  name = 'content'
                            className = 'largebox'
                            value = {desc}  
                            type = 'text' 
                            onChange = {ev => {setDesc(ev.target.value) }}
                            placeholder = 'Description Here' />
                    <div className = 'error'
                         hidden = {validDesc}>
                         Please enter a description</div>
                </div>

                <button name = 'save' 
                        className = 'btn-primary'
                        > Save </button> 
            </form> 
        </div>
    )
}

export default CreateEvent;