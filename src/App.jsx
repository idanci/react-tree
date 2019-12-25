import React from 'react';
import './App.css';
import NodesList from './NodesList';
import Form from './Form';

class App extends React.Component {
  state = {
    nodesList: [
      {
        id: 1,
        name: 'A',
        children: [
          {
            id: 2,
            name: 'B',
            children: []
          }
        ]
      },
      {
        id: 3,
        name: 'C',
        children: [
          {
            id: 4,
            name: 'D',
            children: [
              {
                id: 6,
                name: 'E',
                children: []
              }
            ]
          }
        ]
      }
    ],
  };

  addNewNode = (nodeData) => {
    this.setState(prevState => ({nodesList: [...prevState.nodesList, nodeData]}))
  };

  render() {
    return (
      <div className='App'>
        <div className='App-header'>{this.props.title}</div>
        <NodesList nodes={this.state.nodesList} onSubmitNode={this.addNewNode}/>
        <Form onSubmit={this.addNewNode}/>
      </div>
    );
  }
}

export default App;
