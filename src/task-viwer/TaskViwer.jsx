import React from "react";
import "./TaskViwer.css"
import TaskCard from "../component-task-card/TaskCard"; 
import EmptyList from "../empty-list/EmptyList";

function TaskViwer (props){
  /*const todoItems = props.taskList.filter((item) => item.status === "Todo");
    {todoItems.map((item) => (
              <TaskCard
                key={item.Id}
                Id={item.Id}
                status={item.status}
                content={item.content}
                dueDate={item.dueDate}
              />
            ))}
  */
            return (
              <div className="task-viver-container">
                <div className='task-viver-content'>
                  <div className="headings">
                    <h3 className="content-heading">Tasks</h3>
                    <h4 className="content-subheading">Your tasks in your space.</h4>
                  </div>
                  <button onClick={props.onCreateClick} className="button-primary"> Create Task</button>
                  <div className="tasks-list-container">
                    {props.taskList.length > 0 ? (
                      props.taskList.map((item) => (
                        <TaskCard
                          key={item.Id}
                          Id={item.Id}
                          status={item.status}
                          content={item.content}
                          dueDate={item.dueDate}
                        />
                      ))
                    ) : (
                      <EmptyList onCreateClick={props.onCreateClick} />
                    )}
                  </div>
                </div>
              </div>
            );
            
}

export default TaskViwer;
