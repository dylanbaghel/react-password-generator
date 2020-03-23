import React, { useState } from 'react';
import generateRandomPassword from './utils/generateRandomPassword';
import './App.css';

function App() {
  const [length, setLength] = useState(0);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeLetters, setIncludeLetters] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [password, setPassword] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setPassword(generateRandomPassword(includeNumbers, includeLetters, includeSymbols, length));
  }

  function isDisabled() {
    return (!length || parseInt(length) === 0) || (!includeSymbols && !includeNumbers && !includeLetters)
  }


  return (
    <div className="App">
      <div className="card">
        <h1 className="card__heading">Password Generator</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Enter Length</label>
            <input className="form-control" value={length} onChange={(e) => setLength(e.target.value)} type="number" />
          </div>
          <div className="form-group checkbox">
            <label>Letters</label>
            <input value={includeLetters} onChange={() => setIncludeLetters(!includeLetters)} type="checkbox" />
          </div>
          <div className="form-group checkbox">
            <label>Numbers</label>
            <input value={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} type="checkbox" />
          </div>
          <div className="form-group checkbox">
            <label>Symbols</label>
            <input value={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} type="checkbox" />
          </div>
          <button className={isDisabled() ? 'btn disabled' : 'btn'} disabled={isDisabled()}>Generate</button>
        </form>
        <div className="password__result">
          <label>Resultant Password: </label>
          <input value={password} onChange={() => setPassword(password)} className="form-control" />
        </div>
      </div>
    </div>
  );
}

export default App;
