import React from 'react';

const EventList = ({list, setList}) =>{
    
    const deleteEvent = (idxDelete)=>{        
        const updated = list.filter( (event,idx) => {
            return idx !== idxDelete;
        });
        setList(updated);
    }

    if(list.length){
        return (
            <div className = 'card list'>
                
                    {
                        list.map( (event, idx) => {
                            return (
                                <div className = 'list-group-item' key = {idx}>
                                    <h3>{event.title}</h3>
                                    <p>{event.date}</p>
                                    <p>{event.content}</p>
                                    <button onClick = {() => deleteEvent(idx)}> Delete Event</button>
                                </div>
                            )
                        })
                    }
                
            </div>
        )
    }

    return (
        <div className = 'list-group-item'> 
        <h3> No Events Planned </h3>
        </div>
    )

    
        
    
}

export default EventList;