import React from 'react'

function TenthStudent(props) {

    console.log(`creating Tenth Student Copy`)
  return (
    <div>
      <h1>Student Name:{props.name}</h1>
      <h3>Telugu:{props.telMarks}</h3>
      <h3>Hindi:{props.hinMarks}</h3>
      <h3>English:{props.engMarks}</h3>
      <h3>Maths:{props.mathMarks}</h3>
      <h3>Science:{props.sciMarks}</h3>
      <h3>Social:{props.socMarks}</h3>
    </div>
  )
}

export default TenthStudent
