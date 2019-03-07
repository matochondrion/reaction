import React from 'react';

export default class ChangeTitleForm extends React.Component {
  state = {
    value: ''
  }

  componentDidMount() {
    this.setState({value: this.props.title })
  }

  handleFormChange = (evt) => (
    this.setState({
      value: evt.target.value
    })
  )

  onBlur = (evt) => (
    this.props.onBlur(evt);
  );

  render() {
    return (
      <input type="text" 
        className="list-title" 
        value={this.state.value}
        autoFocus="true"
        onChange={this.handleFormChange}
        onBlur={this.onBlur}
      />
    )
  }

}