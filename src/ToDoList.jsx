import React, {useState} from 'react';

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    const deleteTask = (index) => {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    const moveTaskUp = (index) => {

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    const moveTaskDown = (index) => {

        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }


  return (
    <div className="to-do-list">
        <h1>To Do List</h1>
        <div className="input">
            <input className="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange} />
            <button className="add-button" onClick={addTask} >
                Add
            </button>
        </div>
        <ol className="list">
            {
                tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete    
                        </button>
                        <button className="move-up" onClick={() => moveTaskUp(index)} >
                            UP
                        </button>
                        <button className="move-down" onClick={() => moveTaskDown(index)} >
                            Down
                        </button>
                    </li>)
            }
        </ol>
    </div>
  )
}

export default ToDoList
