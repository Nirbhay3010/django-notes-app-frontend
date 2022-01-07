import React,{useEffect,useState} from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton'

const NotesList = () => {

    let [Notes,setNotes] = useState([]);
    useEffect(()=>{
        getNotes();
    },[])

    let getNotes = async () => {
        let respone = await fetch("/api/notes/");
        let data = await respone.json();
        
        console.log("Running",data)
        setNotes(data);
    }

    return (
        <div className="notes">
            <div className="notes-header">
                
                    <h2 className="notes-title">&#9782; Notes</h2>
                    <p className="notes-count">{Notes.length}</p>
                
            </div>
            <div className="notes-list">
                {Notes.map((note,index)=>(
                   <ListItem key={index} note={note}/>
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default NotesList;
