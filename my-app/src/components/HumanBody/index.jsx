import React from 'react'
import styles from './index.module.css'
import body_img from '../../media/human_body.png'
export default function HumanBody() {
  return (
	<div>

		<img 
			src = {body_img} 
			alt="body_img" 
			className = {styles.body_img}
			// usemap = "#body_parts"
		/>

		<button className = {[styles.head_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.shoulder_left_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.shoulder_right_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.arm_left_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.arm_right_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.leg_right_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.leg_left_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.neck_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.lower_back_btn, styles.btn].join(' ')} ></button>
		<button className = {[styles.back_btn, styles.btn].join(' ')} ></button>

		{/* <map name = "body_parts">
			<area shape="circle" 
				coords = "80 30 20" 
				href="https://www.google.com/" 
				alt = "head" 
				
			/>
		</map> */}
	</div>
  )
}
