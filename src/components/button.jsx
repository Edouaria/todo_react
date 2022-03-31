const init_style = {
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
    outline: 'inherit'
}

const Button = ({ name='button', click=() => {return}, style=init_style }) => {    
    return <button style={{...init_style, ...style}} onClick={click} >{name}</button>
}

export { Button }