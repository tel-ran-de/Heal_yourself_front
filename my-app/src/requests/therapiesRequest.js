import { url } from './url';
export const sendTherapies = (storyId, body) => {
    fetch(`${url}/therapy/${storyId}`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      dataType: "json",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.log(err));
};

