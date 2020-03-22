import React from 'react';


const CitiesList = props => {

   

    let itemsCities = props.citiesArray.map(city=> {

        let pressure = (city.cisnienie!==null)?city.cisnienie:'brak danych';

        return (
            <div className="city" key={city.id_stacji}>
                <h2>{city.stacja}</h2>
                <p>Temperatura: {city.temperatura} st. C.</p>
                <p>Ciśnienie: {pressure} hPa</p>
            </div>
        )
    });

    return (
        <div className="cities-list">
            {itemsCities}
        </div>
    )
}

export default CitiesList;