import React from "react";
import "./Badge.css"

const Badge = (props) => {
    const getBadgeStyle = () => {
        switch (props.status) {
            case "Todo":
                return "badge-todo";
            case "In progres":
                return "badge-in-progress";
            case "pending":
                return "badge-pending";
            case "Complete":
                return "badge-completed";
            default:
                return "badge-todo"    
        }
    }

    return(
        <div className= {`badge ${getBadgeStyle()}`}>
            <div className="task-badge">
                <p>{props.status}</p>
            </div>
        </div>
    )
}    

export default Badge;