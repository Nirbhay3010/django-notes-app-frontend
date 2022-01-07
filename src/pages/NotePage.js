import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';
import {api_url} from '../config'

const NotePage = () => { 
    let noteId = useParams();
    let id=noteId.id;
    let navigate = useNavigate();
    let [note,setnote]= useState(null);
    
    useEffect(() => {
        getNote();
        
    },[id]);

    let getNote = async(noteId) => {
        if (id==='new') return
        let response = await fetch(`${api_url}api/note/${id}/`)
        let data = await response.json();
        // console.log(data);
        setnote(data);
        
    }

    let updateNote = async ()=> {
        fetch(`${api_url}api/note/${id}/update/`,{
            method : "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        
}

    let deleteNote = async ()=> {
        fetch(`${api_url}api/note/${id}/delete/` , {
            method : "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        navigate("/",{replace:true})
    }

    let addNote = async ()=> {
        fetch(`${api_url}api/note/add/` , {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let handleChange = (value)=> {
        
        setnote(
            {...note,'body':value}
            )
        
        
        }

    let handleSubmit = ()=> {
        if(id !== 'new' && !note.body){
            
            deleteNote();
        }
        else if(id!== 'new'){
        updateNote();
        
        }
        else if(id==='new' && note.body){
            addNote();
            
        }
        
        navigate("/",{replace: true});
    }

    
    
    return (
        
        <div className="note">
            <div className="note-header">
                <h3>
                <ArrowLeft onClick={handleSubmit} />
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) :
                (
                    <button onClick={handleSubmit}>Done</button> 
                )}

                    
                </h3>
            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
