import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

class CreateListForm extends React.Component {
  render() {
  	const classes = ['new-list'];

  	if (this.props.formOpen) {
  		classes.push('selected');
  	}

    return (
      <div id="new-list" className={classes.join(' ')} onClick={this.props.onOpenClick}>
      		<span>Add a list...</span>
          <input type="text"
          			 placeholder="Add a list..."
                 value={this.props.title}
                  onChange={this.props.onTitleChange}
                 />
          <div>
            <input type="submit"
            			 className="button"
                   value="Save"
                    onClick={this.props.onFormSubmit}
                    />
            <i className="x-icon icon"
               onClick={this.props.onCloseClick}
            ></i>
          </div>
      </div>
    )
  };
}

export default CreateListForm;
