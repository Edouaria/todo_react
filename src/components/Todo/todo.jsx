import { useState } from 'react'
import { Form, Task } from '.'


const Todo = () => {
    const style = {
        li: {
            padding: '0px'
        }
    }

    const [tasks, setTasks] = useState([])

    const add_task = (task) => {
        setTasks([...tasks, task])
    }

    const delete_task = (e, index) => {
        e.stopPropagation()
        let copy_tasks = [...tasks]
        copy_tasks.splice(index, 1)
        setTasks(copy_tasks)
    }

    const edit_task = (e, index) => {
        e.stopPropagation()
        let copy_tasks = [...tasks]
        copy_tasks[index].edit = true
        setTasks(copy_tasks)
    }

    const save_edition = (index, value) => {
        let copy_tasks = [...tasks]
        if (value == '') {
            copy_tasks[index].edit = false
            setTasks(copy_tasks)
        } else {
            copy_tasks[index].name = value
            copy_tasks[index].edit = false
            setTasks(copy_tasks)
        }
    }

    const cancel_edition = (index) => {
        let copy_tasks = [...tasks]
        copy_tasks[index].edit = false
        setTasks(copy_tasks)
    }

    const is_done = (index) => {
        let copy_tasks = [...tasks]
        console.log(copy_tasks[index].is_done);
        copy_tasks[index].is_done = !copy_tasks[index].is_done
        setTasks(copy_tasks)
    }

    return (
        <div>
            <Form submit={add_task} />
            <ul style={style.li} >
                {tasks.map((data, index) =>
                    <Task
                        index={index}
                        data={data}
                        delete_task={delete_task}
                        edit_task={edit_task}
                        save_edition={save_edition}
                        cancel_edition={cancel_edition}
                        is_done={is_done}
                    />
                )}
            </ul>
        </div>
    )
    
}

export { Todo }