import React from 'react'

const Form = (props) => {
    return (
        <center>
        <form className="form" onSubmit={props.getWeather}>
            <input className="input"
            type='text'
            placeholder='city'
            name='city'
            />
            <input className="input"
            type='text'
            placeholder='country'
            name='country'
            />
            <button className="btn">Submit</button>
        </form>
        </center>
    )
}

export default Form; 