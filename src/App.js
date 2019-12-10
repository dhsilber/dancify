import React from 'react';
import './App.css';
import MenuBar from './MenuBar.js';
import Activate from './Activate.js';
import Content from './Content.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activated: false,
    }
  }

  activationCallback = () => {
    this.setState({activated: true})
  }

  render() {
    const onClick = () => { }
    let display
    if (this.state.activated) {
      display = <Content />
    } else {
      display = <Activate onClick={this.activationCallback} />
    }
    return (
      <div className="App">
        <MenuBar />
        {display}
      </div>
    );
  }
}

export default App;
