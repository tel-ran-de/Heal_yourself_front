import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStories } from '../../requests/getStoriesRequest';

import Button from "../../components/Button";
import Img from "./media/BMI.jpg";
import PaginatedItems from '../../components/PaginatedItems';

import styles from "./index.module.css";

export default function ResultsPage() {
  const [stories, setStories] = useState([]);
  const allAnswers = useSelector((state) => state.allAnswers);

  useEffect(() => getStories(setStories), []);

  return (
    <div className={styles.results_page}>
      {
        allAnswers && allAnswers.healthScore && allAnswers.bmi ? (
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
        )
      }

      <p className = {styles.bmi_descr}>The following diagram helps you interpret your BMI(Body Mass Index)</p>
      <img className = {styles.bmi_img} src={Img} alt="bmi standards" />

      <p className = {styles.title}>Meet your treatment buddies:</p>

      <div className={styles.treatments}>
        {
          stories.length > 0 
          ? 
            <PaginatedItems itemsPerPage = {2} items = {stories}/> 
          : ''
        }
      </div> 

      <div className={styles.btn_back}>
        <Link to="/">
          <Button className={styles.back_button}>back to start</Button>
        </Link>
      </div>
    </div>
  );
}
