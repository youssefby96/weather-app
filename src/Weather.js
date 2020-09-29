import React from 'react'

const Weather = ({description, city, country, error, temperature}) => {
    return (
        <div className="weather">
            <center>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} °F</p>}
            {description && <p>Condition: {description}</p>}
            <span> {error && <p>{error} !!</p>}</span>
            </center>
        </div>
    )
}

export default Weather; 