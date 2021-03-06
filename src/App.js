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
    date: '01/21/2020'
  },
  {
    title: "Another Holiday",
    desc: "Make something up",
    date: '02/16/2019'
  },
  {
    title: "Lucky Charms Day",
    desc: "Eat Cereal",
    date: '03/16/2180'
  },{
    title: "Something in the past",
    desc: "I forgot",
    date: '01/11/2005'
  },

]

const [list, setList] = useState(demo);

  return (
    <div className = 'container'>
      <h1 className = 'header'>Acme Events List <br/> ({list.length} Events booked)</h1>
      <h2> Welcome! Today is {today.toLocaleDateString()}</h2>
      <div className = 'sub-container'>
        <CreateEvent list = {list} setList = {setList} />
        <EventList list = {list} setList = {setList}/>
      </div>
    </div>

  );
}

export default App;
