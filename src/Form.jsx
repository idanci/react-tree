import React from 'react';
import './Form.css';

class Form extends React.Component {
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({name: this.state.name, parentId: this.props.parentId});
    this.setState({name: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={ this.props.parentId && 'add-node' }>
        <span>
          |--
          <input
            type='text'
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}
            required
          />
        </span>
        <button>+</button>
      </form>
    );
  }
}

export default Form;
