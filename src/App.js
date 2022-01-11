import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    );
  }
}

export default App;
