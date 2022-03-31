import { useState } from 'react'
import { Button } from './'


const Psy_model = () => {
    const [value, setValue] = useState({
        size_1: 200,
        size_2: 150,
        size_3: 100,
        size_4: 50,
        color_1: 'rgb(150,150,150)',
        color_2: 'rgb(100,100,100)',
        color_3: 'rgb(50,50,50)',
        color_4: 'rgb(0,0,0)'
    })

    const style = {
        button: {
            marginBottom: '50px',
        },
        container: {
            position: 'relative',
            margin: 'auto',
            width: '200px',
            height: '200px'
        },
        div_1: {
            position: 'absolute',
            margin: 'auto',
            borderRadius: '100%',
            width: `${value.size_1}px`,
            height: `${value.size_1}px`,
            backgroundColor: value.color_1,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            transition: '.2s'
        },
        div_2: {
            position: 'absolute',
            borderRadius: '100%',
            margin: 'auto',
            width: `${value.size_2}px`,
            height: `${value.size_2}px`,
            backgroundColor: value.color_2,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            transition: '.2s'
        },
        div_3: {
            position: 'absolute',
            borderRadius: '100%',
            margin: 'auto',
            width: `${value.size_3}px`,
            height: `${value.size_3}px`,
            backgroundColor: value.color_3,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            transition: '.2s'
        },
        div_4: {
            position: 'absolute',
            borderRadius: '100%',
            margin: 'auto',
            width: `${value.size_4}px`,
            height: `${value.size_4}px`,
            backgroundColor: value.color_4,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            transition: '.2s'
        }
    }

    const change_size = () => {
        let copy_value = {...value}
        copy_value.size_1 = parseInt(Math.random() * 150 + 100)
        copy_value.size_2 = parseInt(Math.random() * copy_value.size_1)
        copy_value.size_3 = parseInt(Math.random() * copy_value.size_2)
        copy_value.size_4 = parseInt(Math.random() * copy_value.size_3)
        copy_value.color_1 = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`
        copy_value.color_2 = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`
        copy_value.color_3 = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`
        copy_value.color_4 = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`
        setValue(copy_value)
    }

    return (
        <div>
            <p>I am an avatar generator</p>
            <Button name='Click' style={style.button} click={change_size} />
            <div style={style.container} >
                <div style={style.div_1} >
                    <div style={style.div_2} >
                        <div style={style.div_3} >
                            <div style={style.div_4} ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Psy_model }