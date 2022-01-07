import React from 'react'
import {Link} from 'react-router-dom';


let getTitle = (note) =>{
    let title = note.body.split('\n')[0];
    if (title.length > 50) return title.slice(0, 50);
    return title;
}

let getTime = (updated) =>{
    return new Date(updated).toLocaleDateString();
}

let getContent = (note)=>{
    let title = getTitle(note);
    let content = note.body.replaceAll('\n', ' ');
    content = content.replaceAll(title, '');
    if (content.length > 50){
        return content.slice(0,50) + '...'
    }
    else{
        return content
    }
}

const ListItem = ({note}) => {
    return (
        <Link to={`https://django-react-note.herokuapp.com/note/${note.id}`}>
            <div className="notes-list-item">
            <h3>{getTitle(note)}</h3>
            <p><span>{getTime(note.updated)}</span>{getContent(note)}</p>
            </div>
        </Link>
    )
}

export default ListItem
