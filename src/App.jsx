import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>{this.props.title}</div>
      </div>
    );
  }
}

export default App;
