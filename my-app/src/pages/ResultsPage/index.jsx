import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Img from "./media/BMI.jpg";
import styles from "./index.module.css";
import { HeartOutlined } from "@ant-design/icons";

export default function ResultsPage() {
  const [text, setText] = useState([]);
  const [stories, setStories] = useState([]);
  const allAnswers = useSelector((state) => state.allAnswers);

  useEffect(() => {
    const getStory = async () => {
      const response = await fetch("http://localhost:8080/story");
      const storiesResponse = await response.json();
      setStories(storiesResponse);
    };
    getStory();
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const { message } = event.target;
    if (message.value !== "") {
      setText([...text, message.value]);
    }
    message.value = "";
  };

  return (
    <div className={styles.results_page}>
      {allAnswers && allAnswers.healthScore && allAnswers.bmi ? (
        <>
          <h4>
            Your health score:{" "}
            {allAnswers.healthScore !== "undefined"
              ? allAnswers.healthScore.toFixed(2)
              : ""}
          </h4>
          <h4>
            Your BMI:{" "}
            {allAnswers.bmi !== "undefined" ? allAnswers.bmi.toFixed(2) : ""}
          </h4>
        </>
      ) : (
        "Error, You have not responded at all questions"
      )}

      <img src={Img} alt="bmi standards" />

      <p>Meet your treatment buddies:</p>

      <div className={styles.treatments}>
        {stories &&
          stories.slice(0, 2).map((el, ind) => (
            <div key={ind}>
              <p>{el.description}</p>
              {
                // 	el.therapies &&
                // 	el.therapies.map((element, ind) => (
                // 		<div
                // 		  className={styles.tags}
                // 		  key={ind}
                // 		>
                // 		  <img
                // 			key={ind}
                // 			src={images[element.smiley].img}
                // 			alt={`Icon${element.smiley + 1}`}
                // 		  />
                // 		  <div className = {[styles.therapy_text, styles[`Icon${images[element.smiley].id + 1}`]].join(" ")}>
                // 			<p>{(element.name[0]).toUpperCase() + (element.name).slice(1)}</p>
                // 		  </div>
                // 		</div>
                // 	  ))
              }

              <form onSubmit={submit}>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  maxLength="250"
                  placeholder="*The commentary must contain no more than 250 characters"
                ></textarea>
                <div className={styles.message}>
                  {text.map((el, index) => (
                    <div key={index}>
                      <p key={index}>
                        {el}&nbsp;&nbsp;
                        <HeartOutlined />
                      </p>
                    </div>
                  ))}
                </div>
                <div className={styles.actions_btns}>
                  <button>Comment</button>
                  <div>I feel sorry for you</div>
                </div>
              </form>
            </div>
          ))}
      </div>

      <div className={styles.btn_back}>
        <Link to="/">
          <Button className={styles.back_button}>back to start</Button>
        </Link>
      </div>
    </div>
  );
}
