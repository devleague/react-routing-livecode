import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const id = this.props.match.params.id;
    const newId = Number(id) + 1;
    this.props.history.push('/contact/' + newId);
  }

  render() {
    const { params } = this.props.match;
    return (
      <div>
        Contact Page {params.id}
        <button onClick={this.clickHandler}>Increment</button>
      </div>
    );
  }
}

export default Contact;
