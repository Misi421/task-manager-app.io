import React, {useState} from 'react';
import './App.css';
import TaskViwer from './task-viwer/TaskViwer';
import SideBar from './side-bar/SideBar'
import Modal from './modal/Modal';


  const data=[
    {
      Id: "T-1",
      status: "Todo",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date (2023, 10, 29),
    },
    {
      Id: "T-2",
      status: "Complete",
      content: "2-Create a Design System for Enum Workspace.",
      dueDate: new Date (2023, 10, 30),
    },
    {
      Id: "T-3",
      status: "In progres",
      content: "3-Create a Design System for Enum Workspace.",
      dueDate: new Date (2023, 11, 24),
    },
    
    {
      Id: "T-4",
      status: "Todo",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date (2023, 10, 29),
    },

    {
      Id: "T-5",
      status: "In progres",
      content: "3-Create a Design System for Enum Workspace.",
      dueDate: new Date (2023, 11, 24),
    },

    {
      Id: "T-6",
      status: "pending",
      content: "3-Create a Design System for Enum Workspace.",
      dueDate: new Date (2023, 11, 24),
    },

    
  ];

  function App() {

    const [taskList, setTaskList] = useState(data)
    const [isOpen, setIsOpen] = useState(false)

    const onNewTaskAdd = (newTask) => {
      console.log("task from App.js", newTask);

      setTaskList((prevState) => [
        ...prevState,
        {
          ...newTask,
          dueDate: new Date(newTask.dueDate),
          Id: "T-" + (prevState.length + 1),
        } 
      ])
      setIsOpen(false)
    };
 
    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

  return (
    <div className="app-container">
      <div className='app-content'>
          <TaskViwer onCreateClick={openModal} taskList={taskList} />
        </div>
        {/*<div className="side-bar-right">
            <div className="side-bar">
              <h3>Create Task</h3>
              <SideBar addNewTask={onNewTaskAdd}/>
            </div>
  </div>*/}
        <Modal onClose={closeModal} isOpen = {isOpen}>
          <h3>Create Task</h3>
          <SideBar addNewTask={onNewTaskAdd}/>
        </Modal>
    </div>
  );
}

export default App;
