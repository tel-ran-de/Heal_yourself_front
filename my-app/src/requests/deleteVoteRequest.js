import { deleteVoteAction } from "../store/actions/deleteVoteAction";
import { url } from './url';

export const deleteVote = ( id ) => {
   
    return dispatch => {
        fetch( `${url}/story/vote/${id}`, {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            dataType: "json",
            body: JSON.stringify(id)
            
        })
        .then(response => response.text())
        .then(text => dispatch(deleteVoteAction(text)))
        .catch(error => console.log(error));
    }
    
}