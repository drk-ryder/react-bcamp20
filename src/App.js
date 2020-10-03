import React from 'react';
import './App.css';
import Result from './assignments';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
          <h2>Result for Assignments</h2>
      </header> */}
      <body className="App-body">
      <h2>Result for Assignments</h2>
          <Result markObt="98" />
          <Result markObt="97" />
          <Result markObt="94" />
          <Result markObt="90" />
          <Result markObt="92" />
          <Result markObt="96" />
          <a
          className="App-link"
          href="https://github.com/drk-ryder"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
      </body>
    </div>
  );
}

export default App;
