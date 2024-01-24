import React from "react";
import "./EmptyList.css";
import TasksIcon from "../assets/icons/Tasks-icon.png";


const EmptyList = (props) => {
    return (
      <div className="empty-list-container">
        <div className="empty-list-mesage">
          <img className="task-logo" src={TasksIcon} alt="icon" />
          <h3 className="title">No Tasks Yet</h3>
          <p className="sub-title">Get productive. Create a Task Now.</p>
          <button onClick={props.onCreateClick} className="button-prymary">
            Create Task
          </button>
        </div>
      </div>
    );
  };

export default EmptyList;
