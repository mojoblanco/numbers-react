import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Random number lookup</h1>

      <form id="form"> 
        <div className="card border-light mb-3">
          <div className="card-header">
            Select type and number to get an interesting fact
          </div>

          <div className="card-body">       
            <div className="form-group">
              <label>Select type</label>
              <select className="form-control" id="exampleSelect1">
                <option>1</option>
              </select>
            </div>

            <div className="form-group">
              <label>Enter number</label>
              <input type="text" className="form-control"/>
            </div>
          </div>

          <div className="card-footer text-right">
            <button type="submit" className="btn btn-primary">Get Data</button>
          </div>
        </div>
      </form>

      <div className="card border-light mb-3">
        <div className="card-header">Result</div>
        <div className="card-body">
          <h4 className="card-title">Type</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's co.ntent</p>
        </div>
      </div>
    </div>
  );
}

export default App;
