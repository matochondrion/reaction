import React from 'react';
import Board from './Board.jsx';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';
import { minutes_since } from '../../lib/helpers';

export default class ActivityContainer extends React.Component {
  render() {
    const activities = this.props.activities ?
      this.props.activities.map((activity, index) => {
      return (
        <li
          key={index}
        >
          <div className="member-container">
            <div className="card-member">TP</div>
          </div>
          <h3>Taylor Peat</h3>
          <div className="comment static-comment"><span>{activity.text}</span>
          </div>
          <small>{minutes_since(activity.created_at)} minutes ago - <span className="link">Edit</span> - <span className="link">Delete</span></small>
          <div className="comment">
            <label>
              <textarea required="" rows="1">The activities have not been implemented yet.</textarea>
              <div>
                <a className="light-button card-icon sm-icon"></a>
                <a className="light-button smiley-icon sm-icon"></a>
                <a className="light-button email-icon sm-icon"></a>
              </div>
              <div>
                <p>You haven't typed anything!</p>
                <input type="submit" className="button not-implemented" value="Save"/><i className="x-icon icon"></i>
              </div>
            </label>
          </div>
        </li>
      );
    }) : null;

    return (
      <ul className="modal-activity-list">
        {activities}
      </ul>
    );
  }

}

// <li>
//   <div className="member-container">
//     <div className="card-member small-size">VR</div>
//   </div>
//   <p><span className="member-name">Victor Reyes</span> changed the background of this board <small>yesterday at 4:53 PM</small>
//   </p>
// </li>