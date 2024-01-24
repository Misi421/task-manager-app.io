/*import React, {useState} from "react";*/
import "./TaskCard.css";
import Badge from "../badge/Badge"
import DueDate from "../Due-date/DueDate"


function TaskCard(props) {
    /*const [counter, setCounter] = useState(0)

    console.log("RENDER" + props.Id)

    const hendleClick = ()  =>{
        setCounter(counter + 1)
    };
*/
    console.log("props in TaskCard", props);

    return(
        <div className="card-wrapper">
            <div className="card-header">
                <p className="task-id">{props.Id}</p>
                <Badge status={props.status} />
            </div>
            <div className="card-content">
                <p>{props.content}</p>
            </div>
            <div className="card-footer">
                {/*<button onClick={hendleClick}>increment</button>*/}
                <p className="due-date">Due Date</p>
                {props.dueDate && <DueDate dueDate={props.dueDate} />}
            </div>
        </div>
    )
}

export default TaskCard;