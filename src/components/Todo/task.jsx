import { useState } from 'react'
import { Button } from '../'


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

    const toto = () => {
        console.log('frout')
    }

    return (
        <>
            {data.edit ?
                <li style={data.is_hover ? style.liHover : style.li} key={data.id} >
                    <span style={data.is_hover ? style.span_1_hover : style.span_1} ></span>
                    <span style={data.is_done ? style.span_2.done : style.span_2.not_done} ></span>
                    <input style={style.inputEdit} type="text" onChange={handleInput} />
                    <Button name='Save' style={style.button} click={() => save_edition(index, value)} />
                    <Button name='Cancel' style={style.button} click={() => cancel_edition(index)} />
                </li>
                :
                <li style={data.is_hover ? style.liHover : style.li} key={data.id} onClick={() => is_done(index)} onMouseEnter={() => is_hover(index)} onMouseLeave={() => is_hover(index)}>
                    <span style={data.is_hover ? style.span_1_hover : style.span_1} ></span>
                    <span style={data.is_done ? style.span_2.done : style.span_2.not_done} ></span>
                    <input style={style.inputNoEdit} type="text" value={data.name} readOnly />
                    <Button name='Edit' style={style.button} click={(e) => edit_task(e, index)} />
                    <Button name='Delete' style={style.button} click={(e) => delete_task(e, index)} />
                </li>
            }
        </>
    )
}

export { Task }