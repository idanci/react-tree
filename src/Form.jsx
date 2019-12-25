import React from 'react';
import './Form.css';

class Form extends React.Component {
  state = {
    newNodeName: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.newNodeName);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='add-node'>
        <span>
          |--
          <input
            type='text'
            value={this.state.newNodeName}
            onChange={event => this.setState({newNodeName: event.target.value})}
            required
          />
        </span>
        <button>+</button>
      </form>
    );
  }
}

export default Form;
