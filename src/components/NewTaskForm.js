import React from "react";

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;














// import React from "react";

// function NewTaskForm({ categories, onTaskFormSubmit }) {
//   return (
//     <form className="new-task-form" onSubmit={(e) => {
//       e.preventDefault();
//       const formData = new FormData(e.target);
//       onTaskFormSubmit({
//         text: formData.get("text"),
//         category: formData.get("category"),
//       });
//     }}>
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {categories.filter((category) => category !== "All")
//             .map((category) => (
//               <option key={category}>{category}</option>
//             ))}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;