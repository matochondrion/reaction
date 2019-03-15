import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

export default class ToggleableCardDescriptionForm extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    formIsOpen: false,
    description: '',
  }

  componentDidMount() {
    this.setState({
      description: this.props.description
    });
  }

  handleOpenFormClick = () => {
    this.setState({
      formIsOpen: true
    });
  }

  handleOnBlur = (evt) => {
    this.setState({
      description: evt.target.value
    })
  }

  handleOnChange = (evt) => {
    this.setState({
      description: evt.target.value
    })
  }

  handleSaveClick = () => {
    this.context.store.dispatch(actions.updateCard(this.props.id, 
      {description: this.state.description}, () => {
        this.setState({ formIsOpen: false })
      })
    )
  }

  handleCloseFormClick = (evt) => {
    console.log('handleCloseClickForm is called')
    // TODO: 
    this.setState({
      formIsOpen: false,
      description: this.props.description
    })
    evt.stopPropagation();
  }

  render() {
    return (
      <form className="description">
        <p>Description</p>
        {this.state.formIsOpen ? (
          <div>
            <textarea
              className="textarea-toggle"
              rows="1"
              defaultValue={this.state.description}
              autoFocus={true}
              onBlur={this.handleOnBlur}
              onChange={this.handleOnChange}
            ></textarea>
            <div
              className="button"
              value="Save"
              onClick={this.handleSaveClick}
              >Save
            </div>
            <i 
              className="x-icon icon"
              onClick={this.handleCloseFormClick}
            ></i>
          </div>                     
          ) : 
        (
          <div>
            <p 
              className="textarea-overlay"
            >{this.state.description}</p>
            <span 
            id="description-edit" 
            className="link"
            onClick={this.handleOpenFormClick}
          >Edit</span>
          </div>)
        }
        <p id="description-edit-options" className="hidden">You have unsaved edits on this field. <span className="link">View edits</span> - <span className="link">Discard</span>
        </p>
      </form>
    );
  }

}
