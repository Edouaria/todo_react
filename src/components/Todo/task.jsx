import { useState } from 'react'


const Task = ({ data, delete_task, edit_task, save_edition, cancel_edition, index }) => {
    const [value, setValue] = useState('')

    const handleInput = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            {data.edit == true ?
                <li key={data.id} >
                    <input type="text" onChange={handleInput}/>
                    <button onClick={() => save_edition(index, value)} >save</button>
                    <button onClick={() => cancel_edition(index)} >Cancel</button>
                </li>
                :
                <li key={data.id} >
                    <input type="text" value={data.name} readOnly />
                    <button onClick={() => edit_task(index)} >Edit</button>
                    <button onClick={() => delete_task(index)} >Delete</button>
                </li>
            }
        </div>
    )
}

export { Task }