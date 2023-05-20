import { sendVoteAction } from "../store/actions/sendVoteAction";
import { url } from './url';
export const sendVote = ( id ) => {
   
     return dispatch => {
        fetch( `${url}/story/vote/${id}`, {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            dataType: "json",
            body: JSON.stringify(id)
        })
            .then(response => response.text())
            .then(text => dispatch(sendVoteAction(text)))
            .catch(error => console.log(error));
     }
    
}