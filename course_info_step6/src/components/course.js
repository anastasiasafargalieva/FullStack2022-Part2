import React from "react";
import Content from "./content";
import Header from "./header";
import Total from "./total";


const Course = ({ course }) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            { course.map( c =>
                    <div key={c.id}>
                        <Header name={c.name} />
                        <Content parts={c.parts} />
                        <Total parts={c.parts} />
                    </div>
                )
            }
        </div>
    )
}

export default Course