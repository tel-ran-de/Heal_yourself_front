import React from 'react'

export default function QuestionItem() {
  return (
	<div>
    <h2>In general, would you say your health is:</h2>
      <label><input type="checkbox" name="health" value="1" />1 - Excellent</label>
      <label><input type="checkbox" name="health" value="2" />2 - Very good</label>
      <label><input type="checkbox" name="health" value="3" />3 - Good</label>
      <label><input type="checkbox" name="health" value="4" />4 - Fair</label>
      <label><input type="checkbox" name="health" value="5" />5 - Poor</label>
  </div>
  )
}



