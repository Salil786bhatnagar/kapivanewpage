import React from "react";
import NoteContext from "./NoteContex";

const NoteState=(props)=>{
     const state= {
        "name": "Ram Sharma",   
        "Course":"Bca"  
     }
    return(
        <NoteContext.Provider value={state}>
             {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState;