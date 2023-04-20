import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [ tasks, setTasks] = useState( TASKS )
  const [ categories, setCategories ] = useState( CATEGORIES )

  const [ selectedCategory, setSelectedCategory ] = useState("All")

  const changeSelectedCategory = newCategory => setSelectedCategory( newCategory )

  const deleteTask = ( deleteIndex ) => {
    const removeTaskFromList = tasks.filter( (task, index) => index !== deleteIndex)
    
    setTasks( removeTaskFromList )
  }

  const filterTasks = tasks.filter( task => task.category === selectedCategory || selectedCategory === "All" )

  const addNewTask = newTask => setTasks( [...tasks, newTask ] )

  return (
    <div className="App">
      <h2>My tasks</h2>
        <CategoryFilter 
        categories = { categories }
        changeSelectedCategory = { changeSelectedCategory } 
      />
      <NewTaskForm
         categories={ categories }
         onTaskFormSubmit={ addNewTask }
      />
      <TaskList 
        tasks = { filterTasks } 
        deleteTask = { deleteTask } 
      />
    </div>
  );
}

export default App;














// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";
// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [tasks, setTasks] = useState(TASKS);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleDelete(taskId) {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   }

//   function handleAddTask(newTask) {
//     setTasks([...tasks, newTask]);
//   }

//   function handleFilter(category) {
//     setSelectedCategory(category);
//   }

//   const displayedTasks = tasks.filter((task) =>
//     selectedCategory === "All" ? true : task.category === selectedCategory
//   );

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} />
//       <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
//       <TaskList tasks={displayedTasks} onDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;