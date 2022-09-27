import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContex';
import Navbar from './Navbar';
export default function Aboutus() {
 
   const data = useContext(noteContext);

  return (
    <div>
       <div><Navbar/></div>
       <h3>About Us</h3>
       <hr/><br/>
      User Name: {data.name}
      <br/>
      Course: {data.Course}
    </div>
  )
}
