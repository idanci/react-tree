import React from 'react';
import './App.css';
import NodesList from './NodesList';
import Form from './Form';
import FilterNodes from './Helpers';

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
    console.log(nodeData);
    // this.setState(prevState => ({nodesList: [...prevState.nodesList, nodeData]}))
  };

  deleteNode = (nodeId) => {
    this.setState({ nodesList: FilterNodes(this.state.nodesList, nodeId) });
  };

  render() {
    return (
      <div className='App'>
        <div className='App-header'>{this.props.title}</div>
        <Form onSubmit={this.addNewNode}/>
        <NodesList nodes={this.state.nodesList} onSubmit={this.addNewNode} onDelete={this.deleteNode}/>
      </div>
    );
  }
}

export default App;
