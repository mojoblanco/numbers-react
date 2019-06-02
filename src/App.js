import React, { useState } from 'react';
import './App.css';
import ResultView from './components/ResultView';

function App() {
  const [ number, setNumber ] = useState(0);
  const [ type, setType ] = useState("");
  const [ result, setResult ] = useState({});
  const [ loaded, setLoaded ] = useState(false);
 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoaded(false);
    
    fetch(`http://numbersapi.com/${number}/${type}?json`)
      .then(response => response.json())
      .then(data =>  {
        setResult(data);
        setLoaded(true);
      });
  }

  let resultView;

  if (loaded) {
    resultView = <ResultView result={result} /> 
  } else {
    resultView = null;
  }

  return (
    <div className="App">
      <h1 className="title">Random number lookup</h1>

      <form id="form" onSubmit={ handleSubmit }> 
        <div className="card border-light mb-3">
          <div className="card-header">
            Select type and number to get an interesting fact
          </div>

          <div className="card-body">       
            <div className="form-group">
              <label>Select type</label>
              <select 
                className="form-control" 
                id="exampleSelect1"
                value={type} 
                onChange={e => setType(e.target.value)}
                > 
                <option value="">-- Select type --</option>
                <option value="math">Math</option>
                <option value="trivia">Trivia</option>
              </select>
            </div>

            <div className="form-group">
              <label>Enter number</label>
              <input 
                type="text" 
                className="form-control"
                value={number} 
                onChange={e => setNumber(e.target.value)}/>
            </div>
          </div>

          <div className="card-footer text-right">
            <button type="submit" className="btn btn-primary">Get Data</button>
          </div>
        </div>
      </form>
 
      {resultView}
    </div>
  );
}

export default App;
