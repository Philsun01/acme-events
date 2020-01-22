import React from 'react';
import moment from 'moment';

const EventList = ({list, setList}) =>{

    const deleteEvent = (idxDelete)=>{        
        const updated = list.filter( (event,idx) => {
            return idx !== idxDelete;
        });
        setList(updated);
    }

    if(list.length){
        
        const sorted = list.sort((b, a) => {
            return moment(a.date).diff(moment(b.date))
        });

        return (
            <div className = 'card list'>
                    {
                        sorted.map( (event, idx) => {
                            let classColor = '';
                            const today = moment().format('MM/DD/YYYY')
                            const eventDate = moment(event.date);

                            if(today === event.date){
                                classColor = 'today';
                            } else if(moment().diff(eventDate) > 0){
                                classColor = 'past';
                            }

                            return (
                                <div className = {classColor} key = {idx}>
                                    <div className = 'alert'
                                       hidden = {today !== event.date}>
                                       **Happening Today**
                                    </div>
                                    <h3>{event.title}</h3>
                                    <p>{event.date}</p>
                                    <p>{event.desc}</p>
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