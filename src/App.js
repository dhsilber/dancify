import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from'./MenuBar.js';
import Content from'./Content.js';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Content />

    </div>
  );
}

{/* <header className="App-header"> */}
{/* <img src={logo} className="App-logo" alt="logo" /> */}
{/* <p>
  Edit <code>src/App.js</code> and resave to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}

export default App;
