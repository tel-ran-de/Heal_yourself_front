import { sendCommentAction } from "../store/actions/sendCommentAction";
import { url } from './url';
export const sendComment = (id, comment) => {
    const data = { storyId: id, comment: comment }
    return dispatch => {
        fetch( `${url}/story/comment/${id}?comment=${comment}`, {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            dataType: "json",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => dispatch(sendCommentAction(json)))
        .catch(error => console.log(error))
    }
    
}