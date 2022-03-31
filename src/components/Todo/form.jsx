import { useState } from 'react'


const Form = ({ submit }) => {
    const style = {
        button: {
            margin: '0px 5px',
            backgroundColor: 'royalblue',
            color: '#282c34',
            fontSize: '2rem',
            fontWeight: 'bold',
            height: '30px',
            border: 'none',
            padding: '0px 10px',
            font: 'inherit',
            cursor: 'pointer',
            outline: 'inherit',
        },
        input: {
            outline: 'none',
            height: '30px',
            padding: '0px',
            border: 'none',
            margin: '0px 5px',
            fontSize: '20px'
        },
        div: {
            display: 'flex'
        }
    }

    const [value, setValue] = useState('')

    const handleInput = e => {
        setValue(e.target.value)
    }

    const add_task = e => {
        e.preventDefault()
        if (value == '') {
            return
        } else {
            submit(
                {
                    id: Date.now(),
                    name: value,
                    is_done: false
                }
            )
            setValue('')
        }
    }

    return (
        <form onSubmit={add_task} >
            <p>I am a todo-list</p>
            <div sytle={style.div} >
                <input style={style.input} type="text" onChange={handleInput} value={value}/>
                <button style={style.button} onClick={add_task} >Valider</button>
            </div>
        </form>
    )
}

export { Form }