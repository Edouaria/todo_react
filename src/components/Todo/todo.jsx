import { useState } from 'react'
import { Form, Task } from '.'


const Todo = () => {
    const [tasks, setTasks] = useState([])

    const add_task = (task) => {
        setTasks([...tasks, task])
    }

    const delete_task = (index) => {
        let copy_tasks = [...tasks]
        copy_tasks.splice(index, 1)
        setTasks(copy_tasks)
    }

    const edit_task = (index) => {
        let copy_tasks = [...tasks]
        copy_tasks[index].edit = true
        setTasks(copy_tasks)
    }

    const save_edition = (index, value) => {
        let copy_tasks = [...tasks]
        copy_tasks[index].name = value
        copy_tasks[index].edit = false
        setTasks(copy_tasks)
    }

    const cancel_edition = (index) => {
        let copy_tasks = [...tasks]
        copy_tasks[index].edit = false
        setTasks(copy_tasks)
    }

    return (
        <div>
            {console.log(tasks)}
            <Form submit={add_task} />
            <ul>
                {tasks.map((data, index) =>
                    <Task
                        index={index}
                        data={data}
                        delete_task={delete_task}
                        edit_task={edit_task}
                        save_edition={save_edition}
                        cancel_edition={cancel_edition}
                    />
                )}
            </ul>
        </div>
    )
    
}

export { Todo }