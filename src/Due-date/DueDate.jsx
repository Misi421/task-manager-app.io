import "./DueDate.css"

function DueDate(props) {
    console.log("props.dueDate:", props.dueDate);
    return(
        <p className="date">{props.dueDate.toLocaleDateString()}</p>
    )
}

export default DueDate;