import React from 'react';
import Node from './Node';

class NodesList extends React.Component {
  render() {
    return (
      <div>
        {this.props.nodes.map(node => <Node key={node.id} {...node} onSubmit={this.props.onSubmit} onDelete={this.props.onDelete}/>)}
      </div>
    );
  }
}

export default NodesList;
