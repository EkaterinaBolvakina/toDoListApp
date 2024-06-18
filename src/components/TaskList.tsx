import {FC, useEffect, useState} from "react";
import Task from './Task'

interface ITaskJSON {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const TaskList: FC = () => {
    const [tasks, setTasks] = useState<{id: number, title: string} [] >([]);

    const [newTask, setNewTask] = useState<{id: number, title: string} >({ id: Math.random() * 1000, title: '' });

    useEffect(() => {
        // 1. Variante mit async / await:
        const fetchTasks = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setTasks(data.slice(0, 10).map((e: ITaskJSON) => ({id: e.id, title: e.title})))

            } catch (error) {
                console.log(error);
            }

        }

        fetchTasks();
        return () => console.log('Component is unmounted')

    }, [/* man kann hier solche parameter, bei der Änderung solcher der effekt updaten soll (2. Updating) z.b. newTask */])

    const deleteTask = (taskIdToDelete: number) => {
        setTasks((currentTasks) => currentTasks.filter(task => task.id !== taskIdToDelete))
    }

    const addTask = () => {
        if (newTask.title.trim()) {
            const tasksCopy = [...tasks];
            tasksCopy.push(newTask);
            setTasks(tasksCopy);
            setNewTask({ id: Math.random() * 1000, title: '' });
        }
    }
    return (
        <>
            <nav className="navbar bg-body-tertiary" style={{ height: '120px' }}>
                <div className="container-fluid">
                    <h1 className='navbar-brand'>Todo List App</h1>
                    <div className="d-flex">
                        <input className="form-control me-2" style={{ width: '780px' }}
                            value={newTask.title}
                            onChange={(e) => setNewTask({ id: newTask.id, title: e.target.value })}
                            placeholder='Enter new task'
                        />
                        <div style={{ margin: '0px 500px 0px 0px' }}>
                            <button className="btn btn-outline-success" style={{ width: '180px', padding: '15px' }} onClick={addTask}>Add Task</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='d-flex flex-column align-items-center text-center' >
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        toDelete={() => deleteTask(task.id)}
                    />
                ))}
            </div>
        </>
    )
}

export default TaskList;