import { useDispatch } from "react-redux";
import {reactionAdded} from './noteSlice';


const reactionEmoji = {
    'thumbsUp' :'👍',
    'wow' : '👌',
    'heart' : '❤️',
    'rocket' : '🚀',
    'coffee' : '☕'
}




const ReactionsBtn = ({note}) => {

    const dispatch = useDispatch();

   

    return (
        <>
        {
            Object.entries(reactionEmoji).map(([reactionname,emoji]) => (
                
                    <button
                        type="button"
                        className="reactionButton"
                        onClick={() => dispatch(reactionAdded({id: note.id , reaction: reactionname}))}
                    >
                        {emoji} {note.reactions[reactionname]}
                    </button>
                
            ))
            
        
        }
        </>
    )
   
}

export default ReactionsBtn;