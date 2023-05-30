import React from 'react';
import CarForm from './components/ListForm';
import CarList from './components/DataList';
import CarSearch from './components/ListSearch';
import CarValue from './components/ListValue';

function App() {
  return (
    <div className='container is-fluid'>
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue/>
    </div>
  )
}

export default App
