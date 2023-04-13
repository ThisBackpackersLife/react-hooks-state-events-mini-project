import React from "react";

function Task( props ) {

  let { text, category } = props.task 

  return (
    <div className="task">
      <div className="label">{ category }</div>
      <div className="text">{ text }</div>
      <button className="delete" onClick={ () => props.deleteTask( props.index ) }>X</button>
    </div>
  );
}

export default Task;




















// import React from "react";

// function Task({ task, onDelete }) {
//   return (
//     <div className="task">
//       <div className="label">{task.category}</div>
//       <div className="text">{task.text}</div>
//       <button className="delete" onClick={() => onDelete(task.id)}>X</button>
//     </div>
//   );
// }

// export default Task;
