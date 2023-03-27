import React, { useState } from "react";
import style from "./index.module.css";
import Button from "../../components/Button";

import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div className={style.start_page}>
      <div className={style.description}>
        <p>Greetings, dear friend!</p>
        <p>
          We are happy to help you, analyze your health condition and choose the
          best therapy for you!
        </p>
        <p>Are you ready?</p>
      </div>
      <Link to="/human">
        <Button className={style.start_button}>start</Button>
      </Link>
    </div>
  );
}