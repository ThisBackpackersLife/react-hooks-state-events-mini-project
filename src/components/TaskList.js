import React from "react";
import Task from "./Task";
import { render } from "@testing-library/react";
// import { TASKS } from "../data";


function TaskList( { tasks, deleteTask }) {
  
  const renderTasks = tasks.map(( task, index )=> 
    <Task 
      key = { index } 
      task = { task } 
      index = { index }
      deleteTask = { deleteTask }
    />
  )
  

  return (
    <div className="tasks" > {null}
      {/* display a list of tasks using Task component */}
      { renderTasks }
    </div>
  );
}
export default TaskList;














// import React from "react";
// import Task from "./Task";

// function TaskList({ tasks, onDelete }) {
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task key={task.id} task={task} onDelete={onDelete} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;
