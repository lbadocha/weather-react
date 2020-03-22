import React, {Component} from 'react';

import axios from 'axios';

import CitiesList from './CitiesList';
import FilterForm from './FilterForm';

class Weather extends Component {


    constructor() {
        super();

        this.state = {
            weatherArray: [],
            filteredWeatherArray: []
        }
    }

    getWeatherData = () => {
        axios.get(`https://danepubliczne.imgw.pl/api/data/synop`)
        .then(res => {
            const weather = res.data;
            this.setState({
                weatherArray: weather,
                filteredWeatherArray: weather
            });
        });
    }


    filterCities = e => {
        let filteredArray = this.state.weatherArray.filter(cityObj=>{
            return cityObj.stacja.toUpperCase().includes(e.target.value.toUpperCase());
        });

        this.setState({filteredWeatherArray: filteredArray});

    }


    componentDidMount() {
        this.getWeatherData();
    }


    render() {

        return(
            <div className="weather">
                <FilterForm filterCities={this.filterCities} />
                <CitiesList citiesArray={this.state.filteredWeatherArray} />
            </div>
        )
    }
}

export default Weather;