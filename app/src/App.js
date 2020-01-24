import React, { useState } from 'react';
import FilterForm from './components/FilterForm';
import EventFeed from './components/EventFeed';
import './App.css';



function App() {

  const [ formValues, setFormValues ] = useState({
    startDate: '',
    endDate: '',
    flight_number: ''
  });


  return (
    <div className="App">
      <div className="spacex-events">
        <h1>SpaceX Historical Events</h1>
        <FilterForm updateFormValues={setFormValues} />
        <EventFeed
          startDate={formValues.startDate}
          endDate={formValues.endDate}
          flight_number={formValues.flight_number}
        />
      </div>
    </div>
  );
}

export default App;
