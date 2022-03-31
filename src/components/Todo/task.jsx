import { useState } from 'react'


const Task = ({ data, index, delete_task, edit_task, save_edition, cancel_edition, is_done, is_hover }) => {
    const style = {
        li: {
            display: 'flex',
            listStyleType: 'none',
        },
        liHover: {
            display: 'flex',
            listStyleType: 'none',
            backgroundColor: 'rgb(0, 0, 0, .2)'
        },
        inputEdit: {
            outline: 'none',
            border: 'none',
            margin: '6px',
            marginLeft: '18px',
            fontSize: '20px'
        },
        inputNoEdit: {
            outline: 'none',
            border: 'none',
            fontSize: '20px',
            margin: '6px',
            marginLeft: '12px',
            backgroundColor: '#282c34',
            color: 'white',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            OUserSelect: 'none'
        },
        button: {
            margin: '5px',
            backgroundColor: 'royalblue',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#282c34',
            height: '30px',
            border: 'none',
            padding: '0px 10px',
            font: 'inherit',
            cursor: 'pointer',
            outline: 'inherit',
        },
        span_1: {
            position: 'relative',
            width: '30px',
            height: '30px',
            margin: '6px 0px',
            marginLeft: '6px',
            backgroundColor: 'rgb(0, 0, 0, .2)',
        },
        span_1_hover: {
            position: 'relative',
            width: '30px',
            height: '30px',
            margin: '6px 0px',
            marginLeft: '6px',
        },
        span_2: {
            done: {
                position: 'absolute',
                width: '30px',
                height: '30px',
                margin: '6px 0px',
                marginLeft: '6px',
                backgroundColor: 'darkorchid',
                transition: '.2s',
            },
            not_done: {
                position: 'absolute',
                width: '0px',
                height: '30px',
                margin: '6px 0px',
                marginLeft: '6px',
                backgroundColor: 'darkorchid',
                transition: '.2s'
            }
        }
    }

    const [value, setValue] = useState('')

    const handleInput = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            {data.edit ?
                <li style={data.is_hover ? style.liHover : style.li} key={data.id} >
                    <span style={data.is_hover ? style.span_1_hover : style.span_1} ></span>
                    <span style={data.is_done ? style.span_2.done : style.span_2.not_done} ></span>
                    <input style={style.inputEdit} type="text" onChange={handleInput} />
                    <button style={style.button} onClick={() => save_edition(index, value)} >Save</button>
                    <button style={style.button} onClick={() => cancel_edition(index)} >Cancel</button>
                </li>
                :
                <li style={data.is_hover ? style.liHover : style.li} key={data.id} onClick={() => is_done(index)} onMouseEnter={() => is_hover(index)} onMouseLeave={() => is_hover(index)}>
                    <span style={data.is_hover ? style.span_1_hover : style.span_1} ></span>
                    <span style={data.is_done ? style.span_2.done : style.span_2.not_done} ></span>
                    <input style={style.inputNoEdit} type="text" value={data.name} readOnly />
                    <button style={style.button} onClick={(e) => edit_task(e, index)} >Edit</button>
                    <button style={style.button} onClick={(e) => delete_task(e, index)} >Delete</button>
                </li>
            }
        </div>
    )
}

export { Task }