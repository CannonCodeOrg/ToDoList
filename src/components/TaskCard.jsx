import React from "react";
//This is for adding tasks to Calendar and ToDo in progress
const TaskCard = ({ id, description, deadlineDate, tags, contributors }) => {
  return (
    <div className="task-card">
      <h3 className="title-id">{id}</h3>
    <div>
        <div>
            {deadlineDate}
        </div>
        <p className="description">Tu jakies coś tam co ma zrobić</p>
        <div>
            {tags}
        </div>
        <div>
            {contributors}
        </div>
    </div>
    </div>
    
  );
};

export default TaskCard;
