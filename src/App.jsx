import React from 'react';
import './App.css';
import NodesList from './NodesList';
import Form from './Form';

const FilterNodes = (nodesList, id) => {
  var r = nodesList.filter(function(node) {
    if (node.children) { node.children = FilterNodes(node.children, id) };
    return node.id !== id
  })
  return r;
};

const Sequence = [1]

const InsertNode = (nodesList, newNode) => {
  if (newNode.parentId == null) {
    nodesList.push({id: Sequence.push(Sequence.length + 1), name: newNode.name, children: []})
  } else {
    nodesList.map(function(node) {
      if(node.id === newNode.parentId) {
        node.children.push({id: Sequence.push(Sequence.length + 1), name: newNode.name, children: []})
      } else {
        InsertNode(node.children, newNode)
      }
      return null;
    })
  }

  return nodesList;
};

const GenerateNode = () => {
  return {
    id: Sequence.push(Sequence.length + 1),
    name: Math.random().toString(36).slice(-3),
    children: []
  }
}

const GenerateTree = () => {
  let amountOfNodes = Math.ceil(Math.random() * 10 + 1);
  let nodesList = [];
  for (let i=0; i < amountOfNodes; i++) {
    let node = GenerateNode();
    if ((Math.random() * 2) < 1) {
      node.children.push(GenerateNode());
    };
    nodesList.push(node);
  }
  return nodesList;
}

class App extends React.Component {
  state = {
    nodesList: GenerateTree()
  }

  addNewNode = (nodeData) => {
    const newList = this.state.nodesList;
    InsertNode(newList, nodeData)
    this.setState({ nodesList: newList });
  };

  deleteNode = (nodeId) => {
    this.setState({ nodesList: FilterNodes(this.state.nodesList, nodeId) });
  };

  render() {

    return (
      <div className='App'>
        <div className='App-header'>{this.props.title}</div>
        <Form onSubmit={this.addNewNode} parentId={null}/>
        <NodesList nodes={this.state.nodesList} onSubmit={this.addNewNode} onDelete={this.deleteNode}/>
      </div>
    );
  }
}

export default App;
