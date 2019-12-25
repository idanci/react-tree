import React from 'react';
import './Node.css';
import Form from './Form';

class Node extends React.Component {
  render() {
    return (
      <div className={this.props.child && 'child-node'}>
        <span>|--{this.props.name}</span>
        <button type='button'>-</button>
        <Form onSubmit={this.props.onSubmitNode}/>
        {this.props.children.map(node => <Node key={node.id} {...node} child={true}/>)}
      </div>
    );
  }
}

export default Node;
