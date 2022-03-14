import React, { useState } from 'react'
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';


import bash_logo from '../img/bash_logo.png'
import blender_logo from '../img/framasoft_logo.png'
import audacity_logo from '../img/audacity_logo.png'
import git_logo from '../img/git_logo.png'
import godot_logo from '../img/godot_logo.png'
import inkscape_logo from '../img/inkscape_logo.png'
import krita_logo from '../img/krita_logo.png'
import linux_logo from '../img/linux_logo.png'
import openstreetmap_logo from '../img/openstreetmap_logo.png'
import p5_logo from '../img/p5_logo.png'
import python_logo from '../img/python_logo.png'
import vlc_logo from '../img/vlc_logo.png'


const Caroussel = () => {
    const [index, setIndex] = useState(0)
    const list = [bash_logo, blender_logo, audacity_logo, git_logo, godot_logo, krita_logo, linux_logo, inkscape_logo, openstreetmap_logo, p5_logo, python_logo, vlc_logo]
    const style = {
        div: {
            display: 'flex',
            justifyContent: 'space-between',
            width: 400
        },
        button: {
            margin: 10,
            border: 'none',
            background: 'rgba(255,255,255,.2)'
        }
    }

    const increment = () => {
        setIndex((index + 1) % list.length)
    }

    const decrement = () => {
        if (index == 0) {
            setIndex(list.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
 
    return (
        <div>
            <p>I am a caroussel</p>
            <div style={style.div}>
                <button style={style.button} onClick={decrement}><AiFillCaretLeft /></button>
                <img src={list[index]} alt="img" width="200px" />
                <button style={style.button} onClick={increment}><AiFillCaretRight /></button>
            </div>
        </div>
    )
}

export { Caroussel }