import React, {Fragment, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => setState(data))
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {state.Countries !== undefined ? <p>
                        {
                            Object.keys(state.Countries).splice(1, 10).map(item => {
                                return (
                                    <p>{state.Countries[item].Country} : NewConfirmed: {state.Countries[item].NewConfirmed}</p>
                                )
                            })
                        }
                </p> : ''}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
