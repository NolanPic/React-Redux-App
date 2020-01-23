import React, { useState } from 'react';

const FilterForm = props => {

    const { updateFormValues } = props;

    const [ start, setStart ] = useState('');
    const [ end, setEnd ] = useState('');
    const [ flightNum, setFlightNum ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        updateFormValues({
            startDate: start,
            endDate: end,
            flight_number: flightNum
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={start}
                onChange={e => setStart(e.target.value)}
                type="date"
                placeholder="Start"
            />
            <input
                value={end}
                onChange={e => setEnd(e.target.value)}
                type="date"
                placeholder="End"
            />
            <input
                value={flightNum}
                onChange={e => setFlightNum(e.target.value)}
                type="number"
                placeholder="Flight #"
            />
            <button type="submit">Filter</button>
        </form>
    );
};

export default FilterForm;
