import React, {useState} from "react"
import "./SideBar.css"

const SideBar = (props) => {
    const [taskName, setTaskName] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const handleNameChange = (event) =>{
        setTaskName(event.target.value);
    };

    const handleDateChange = (event) =>{
        setDueDate(event.target.value);
    };

    const handleDescriptionChange = (event) =>{
        setTaskDescription(event.target.value);
    };

    //const [formData, setFormData] = useState({
    //    taskName:"",
    //    dueDate:"",
    //    taskDescriptions:"",
    //});

    //const handleInputChange = (event) => {
    //    setFormData((prevState) => ({
    //        ...prevState,
    //        [event.target.name]: event.target.value,
    //    }));
    //};

    const resetForm = () => {
        setTaskName("")
        setDueDate("")
        setTaskDescription("")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
         const newTask = {
            content: taskName,
            dueDate: dueDate,
            taskDescription: taskDescription,
            status:"Todo"
        }
    

        console.log("newTask = ", newTask);
        props.addNewTask(newTask);
        resetForm();
    };  

    return(
        <div className="create-task">
            <form onSubmit={handleSubmit}>
                <div className="part">
                    <label className="text-label">Task Name</label>
                    <input
                    value={taskName}
                    name="taskName"
                    onChange={handleNameChange}
                    className="label-input" type="text" />
                </div>
                <div className="part">
                    <label className="text-label">Due Date</label>
                    <input 
                    value={dueDate}
                    name="dueDate"
                    onChange={handleDateChange}
                    className="label-input" type="date" />
                </div>
                <div className="part">
                    <label className="text-label">Text Descriptions</label>
                    <textarea 
                    value={taskDescription}
                    name="taskDescription"
                    onChange={handleDescriptionChange}
                    className="label-input" id="" cols="30" rows="10"></textarea>
                </div>
                <button className="button">Create Task</button>
            </form>
        </div>
    )

    
}

export default SideBar