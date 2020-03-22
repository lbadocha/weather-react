import React from 'react';


const FilterForm = props => {
    return(
        <form className="filter-form">
            <h2>Wyszukaj miasto</h2>
            <input type="text" placeholder="Szukaj miasta" onChange={props.filterCities} />
        </form>
    )
}

export default FilterForm;