import { createSlice } from '@reduxjs/toolkit';
import {sub} from 'date-fns';

const initialState = [
    {
        id : '1' ,
        title: "Note1 " ,
         content  : "hii this is note 1 regarding the evolutionof computer" , 
        userID : '0',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions : {
            thumbsUp : 0,
            wow: 0,
            heart : 0,
            rocket : 0,
            coffee: 0
        }
    },
    
    {
        id : '2' ,
        title: "Note2 " , 
        content  : "hello, this note app can be used by anyone to store their work" , 
        userID : '1',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions : {
            thumbsUp : '0',
            wow: '0',
            heart :'0',
            rocket : '0',
            coffee: '0'
        }
    },

]

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {   

        noteAdded(state,action) {
            state.push(action.payload)
        },
        reactionAdded(state,action) {
          
            const {id,reaction} = action.payload;
            const existingNote = state.find((note) => note.id === id);
            if(existingNote)
                existingNote.reactions[reaction] ++;

        },
        

     },
})

export const selectAllNotes = (state) => state.note;
export const {noteAdded, reactionAdded} = noteSlice.actions;
export default noteSlice.reducer;