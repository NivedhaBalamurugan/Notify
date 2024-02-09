import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUsers } from "../user/userSlice";
import { noteAdded } from "./noteSlice";


const AddNoteForm = () => {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [userID,setUserID] = useState('');

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const date = new Date().toISOString();

    const reactions = {
        thumbsUp : 0,
        wow: 0,
        heart : 0,
        rocket : 0,
        coffee: 0
    }

    const onSaveNote = () => {
        if(title && content) {
            dispatch(
                noteAdded({
                    id:nanoid(),
                    title,
                    content,
                    userID,
                    date,
                    reactions
                })
            )
        }
        setTitle('');
        setContent('');
    }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userID) ;

    return(
        <section>
            <h2>Add a Note</h2>
            <form onSubmit={(e)=> e.preventDefault()}>
                <label htmlFor="noteTtile">Note Title:</label>
                <input 
                    type="text"
                    required
                    id="noteTitle"
                    name="noteTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select 
                    id="noteAuthor"
                    value={userID} 
                    onChange={(e) => setUserID(e.target.value)}
                >
                    <option value="">Select author name</option>
                    {
                        users.map((user) => (
                            <option value={user.id} >
                                {user.name}
                            </option>
                        ))
                    }   
                </select>
                <label htmlFor="noteContent">content:</label>
                <textarea
                    type="text"
                    required
                    id="noteContent"
                    name="noteContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                

                <button 
                    type="button" 
                    onClick={onSaveNote}
                    disabled={!canSave}
                >
                    Save Note
                </button>
            </form>


        </section>
    )
}

export default AddNoteForm 