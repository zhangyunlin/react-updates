import logo from './logo.svg';
import './App.css';
import React from 'react';
import StateDemo from './state/StateDemo';
import { useState } from 'react';
import StateUpdate from './state/StateUpdate';
import ControlledForm from './controlled-component/ControlledForm';
import MultiInputForm from './controlled-component/MultiInputForm';
import FormDom from './controlled-component/FormDom';

function App() {
  return (
    <div className="App">
      {/* <StateDemo /> */}
      {/* <StateUpdate /> */}
      <ControlledForm />

      <MultiInputForm />

      <FormDom />

    </div>
  );
}

export default App;
