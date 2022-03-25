import { useState } from 'react'

const Form = ({ submit }) => {
    const [value, setValue] = useState('')

    const handleInput = e => {
        setValue(e.target.value)
    }

    const add_task = e => {
        e.preventDefault()
        submit(
            {
                id: Date.now(),
                name: value
            }
        )
        setValue('')
    }

    return (
        <form onSubmit={add_task} >
            <input type="text" onChange={handleInput} value={value}/>
            <button onClick={add_task} >Valider</button>
        </form>
    )
}

export { Form }