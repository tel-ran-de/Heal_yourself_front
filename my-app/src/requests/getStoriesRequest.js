import { url } from './url';
export const getStories = (callback) => {
	fetch(`${url}/story`)
		.then(res => res.json())
		.then(json => callback(json))
		.catch(err => console.log(err))
};
