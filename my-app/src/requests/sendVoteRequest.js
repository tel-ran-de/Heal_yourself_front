import { sendVoteAction } from "../store/actions/sendVoteAction";

export const sendVote = ( id, callback ) => {
   
     return dispatch => {
        fetch( `http://localhost:8080/story/vote/${id}`, {
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
            //     return callback(json)
                // dispatch(sendVoteAction(json))
           // })
            // .catch(error => console.log(error));
     }
    
}