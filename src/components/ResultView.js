import React from 'react';

function ResultView({ result }) {
    return (
        <div className="card border-light mb-3">
            <div className="card-header">Result</div>
            <div className="card-body">
            <h4 className="card-title">{ result.type }</h4>
            <p className="card-text">
                { result.text }
            </p>
            </div>
        </div>
    );
}

export default ResultView;