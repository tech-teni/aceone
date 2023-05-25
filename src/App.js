import React, {useState} from 'react'
import CardForm from './components/CardForm';
import CardInfo from './components/CardInfo';
function App() {

  

  
  return (
    <div className="App">
      <div className="container">
        <div className="sub-container">
          <div className="icon-container">
            <img src="./images/cancel.svg" alt="close button" />
          </div>
          <div className="main-content">
          
            <CardForm/>
            <CardInfo/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
