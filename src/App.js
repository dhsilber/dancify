import React from 'react';
import './App.css';
import MenuBar from'./MenuBar.js';
import Activate from'./Activate.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activated: false,
    }
  }
  render() {
    const onClick = ()=>{}
    return (
      <div className="App">
        <MenuBar />
        <Activate onClick={onClick}/>
      </div>
    );
  }
}

export default App;
