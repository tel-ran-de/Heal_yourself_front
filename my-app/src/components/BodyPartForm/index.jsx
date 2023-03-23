
import React from 'react'
import human_body from '../../media/human-body.png'
import styles from './index.module.css'
import { useDispatch } from 'react-redux';
import { getBodyPartAction } from '../../store/actions/getBodyPartAction';

export default function BodyPartForm({ body_part, isDisabled, setIsDisabled }) {
 
 const dispatch = useDispatch()
  const submit = (event) => {
    event.preventDefault();
    const { part } = event.target;
    // console.log(event.target.part.classList);
    console.log(part.value);
    setIsDisabled(false);
dispatch(getBodyPartAction(part.value));
	const btns = document.getElementsByClassName(styles.btn)
	Array.from(btns).forEach(el => el.classList.remove(styles.active))
	part.classList.add(styles.active)

  };



  return (
    <form onSubmit={submit}>
      <button
        className={[styles[body_part], styles.btn].join(" ")}
        name="part"
        value={body_part}
      ></button>
    </form>
  );
}
