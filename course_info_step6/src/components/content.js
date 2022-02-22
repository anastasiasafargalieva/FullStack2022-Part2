import React from "react";
import Part from "./part";

const Content = ({ parts }) => {
    return (
        <div>
             { parts.map( p => <Part key={p.id} part={p}/> ) }
        </div>
    )
}

export default Content