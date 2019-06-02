import React, { useState } from 'react';

const SearchForm = ({setData}) => {
    const [ number, setNumber ] = useState(0);
    const [ type, setType ] = useState("");

    const getData = (evt)  => {
        evt.preventDefault();
        
        fetch(`http://numbersapi.com/${number}/${type}?json`)
          .then(response => response.json())
          .then(data =>  {
            setData(data);
          });
    }

    return (
        <form id="form" onSubmit={ getData }> 
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
    );
}

export default SearchForm;