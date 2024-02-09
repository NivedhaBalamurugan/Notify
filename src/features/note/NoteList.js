import { useSelector } from "react-redux";
import { selectAllNotes } from "./noteSlice";
import { selectAllUsers } from "../user/userSlice";
import { parseISO, formatDistanceToNow } from 'date-fns';
import ReactionsBtn from './ReactionsBtn';

const NoteList = () => {

    const notes = useSelector(selectAllNotes)
    const users = useSelector(selectAllUsers)

    const timeago = (timestamp) => {

       
        if(timestamp) {
            const crtdate = parseISO(timestamp) //created time
            const timePeriod = formatDistanceToNow(crtdate) 
            return `${timePeriod} ago`
        }
        return '';
    }

    const newnotes=[...notes].sort((a,b) =>{
        if(new Date(a.date) < new Date(b.date))
            return 1;
        else
            return -1;
    }) 

    return(
        <section>
            <h2>Notes</h2>
            {
                    newnotes.map((note) => {

                        const author = users.find((user) => {
                            if(user.id === note.userID)
                                return user;
                        })


                        return(
                            <article key={note.id}>
                                <h3>{note.title}</h3>
                                <p>{note.content.substring(0,100)}</p>
                                <p className="noteCredit">
                                    <span>by {author ? author.name : 'Unknown Author' }</span>
                                </p>
                                <p>{timeago(note.date)}</p>
                                <ReactionsBtn 
                                    note={note}
                                />
                            </article>
                        )

                    })

                                   
            }
        </section>
    )
}
export default NoteList;


