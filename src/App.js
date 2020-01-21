import React, {useState} from 'react';

import CreateEvent from './CreateEvent';
import EventList from './EventList';
import './App.css';


const today = new Date();
function App() {

const demo = [
  {
    title: "MLK Holiday",
    desc: "It's a government Holiday",
    date: 'Jan 20'
  },
  {
    title: "Another Holiday",
    desc: "Make something up",
    date: 'Feb 40'
  }

]

const [list, setList] = useState(demo);

  return (
    <div className = 'container'>
      <h1 className = 'header'>Acme Events List ({list.length} Events booked)</h1>
      <p> Welcome! Today is {today.toLocaleDateString()}</p>
      <div className = 'sub-container'>
        <CreateEvent list = {list} setList = {setList} />
        <EventList list = {list} setList = {setList}/>
      </div>
    </div>

  );
}

export default App;
