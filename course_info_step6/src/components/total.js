import React from "react";

const Total = ({ course }) => {
    const sum = course.parts.reduce( (s,p)=> s + p.exercises, 0) 
    //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises
    return(<p> <b>Total number of exercises  {sum} </b></p>)}

export default Total