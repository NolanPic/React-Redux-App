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
      <FilterForm updateFormValues={setFormValues} />
      <EventFeed
        startDate={formValues.startDate}
        endDate={formValues.endDate}
        flight_number={formValues.flight_number}
      />
    </div>
  );
}

export default App;
