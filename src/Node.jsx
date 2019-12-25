import React from 'react';
import './Node.css';
import Form from './Form';

class Node extends React.Component {
  render() {
    return (
      <div className={this.props.child && 'child-node' }>
        <span>|--{this.props.name}</span>
        <button onClick={ () => this.props.onDelete(this.props.id) }>-</button>
        <Form onSubmit={this.props.onSubmit} parentId={this.props.id}/>
        {this.props.children.map(node => <Node key={node.id} {...node} child={true} onSubmit={this.props.onSubmit} onDelete={this.props.onDelete}/>)}
      </div>
    );
  }
}

export default Node;
