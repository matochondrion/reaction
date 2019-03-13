import React from 'react';
import Board from './Board.jsx';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';
import ActivityContainer from './ActivityContainer';

class SingleCard extends React.Component {
  

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    const cardId = store.getState().activeCard;
    store.dispatch(actions.fetchCard(cardId));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleCloseClick = () => {
    const store = this.context.store;
    store.dispatch(actions.removeActiveCard());
  }

  // TODO: dispatch REMOVE_ACTIVE_CARD_SUCESS to the store
  // TODO: add dynamic card details below

  render() {
    const store = this.context.store;
    const cardId = Number(this.props.id);
    const card = store.getState().cards.find((card) => {
      return card.id === cardId;
    });

    const labels = card.labels.map((label, idx) => {
      return (
        <div key={idx} className="member-container">
          <div className={`${label} label colorblindable`}></div>
        </div>
      );
    })

    if (card) {
      return (
        <div id="modal-container">
          <div className="screen"></div>
          <div id="modal">
            <i 
              className="x-icon icon close-modal"
              onClick={this.handleCloseClick}
            ></i>
            <header>
              <i 
                className="card-icon icon .close-modal"
                // save modal
              ></i>
              <textarea 
                className="list-title" 
                style={{height: "45px"}}
                value={card.title}
              ></textarea>
              <p>
                in list
                <a 
                  className="link"
                  // some other component?
                > {store.getState().lists.find(list => list.id === card.list_id).title}</a>
                <i className="sub-icon sm-icon"></i>
              </p>
            </header>
            <section className="modal-main">
              <ul className="modal-outer-list">
                <li className="details-section">
                  <ul className="modal-details-list">
                    <li className="labels-section">
                      <h3>Labels</h3>
                      {labels.length === 0 ? null : labels}
                    </li>
                    <li className="due-date-section">
                      <h3>Due Date</h3>
                      <div id="dueDateDisplay" className="overdue completed">
                        <input 
                          id="dueDateCheckbox" 
                          type="checkbox" 
                          className="checkbox" 
                          checked=""
                        />{card.due_date}<span>{new Date(card.due_date) > Date.now() ? null : "(past due)"  }</span>
                      </div>
                    </li>
                  </ul>
                  <form className="description">
                    <p>Description</p>
                    <span 
                      id="description-edit" 
                      className="link"
                      // TODO: add editable description
                    >Edit</span>
                    <p 
                      className="textarea-overlay"
                      value={card.description}
                    ></p>
                    <p id="description-edit-options" className="hidden">You have unsaved edits on this field. <span className="link">View edits</span> - <span className="link">Discard</span>
                    </p>
                  </form>
                </li>
                <li className="comment-section">
                  <h2 className="comment-icon icon">Add Comment</h2>
                  <div>
                    <div className="member-container">
                      <div className="card-member">TP</div>
                    </div>
                    <div className="comment">
                      <label>
                        <textarea required="" rows="1" placeholder="Write a comment..."></textarea>
                        <div>
                          <a className="light-button card-icon sm-icon"></a>
                          <a className="light-button smiley-icon sm-icon"></a>
                          <a className="light-button email-icon sm-icon"></a>
                          <a className="light-button attachment-icon sm-icon"></a>
                        </div>
                        <div>
                          <input type="submit" className="button not-implemented" value="Save"/>
                        </div>
                      </label>
                    </div>
                  </div>
                </li>
                <li className="activity-section">
                  <h2 className="activity-icon icon">Activity</h2>
                  <ul className="horiz-list">
                    <li className="not-implemented">Show Details</li>
                  </ul>
                  <ActivityContainer 
                    activities={card.comments}
                  />
                  
                </li>
              </ul>
            </section>
       
            <aside className="modal-buttons">
              <h2>Add</h2>
              <ul>
                <li className="member-button"><i className="person-icon sm-icon"></i>Members</li>
                <li className="label-button"><i className="label-icon sm-icon"></i>Labels</li>
                <li className="checklist-button"><i className="checklist-icon sm-icon"></i>Checklist</li>
                <li className="date-button not-implemented"><i className="clock-icon sm-icon"></i>Due Date</li>
                <li className="attachment-button not-implemented"><i className="attachment-icon sm-icon"></i>Attachment</li>
              </ul>
              <h2>Actions</h2>
              <ul>
                <li className="move-button"><i className="forward-icon sm-icon"></i>Move</li>
                <li className="copy-button"><i className="card-icon sm-icon"></i>Copy</li>
                <li className="subscribe-button"><i className="sub-icon sm-icon"></i>Subscribe<i className="check-icon sm-icon"></i>
                </li>
                <hr/>
                <li className="archive-button"><i className="file-icon sm-icon "></i>Archive</li>
              </ul>
              <ul className="light-list">
                <li className="not-implemented">Share and more...</li>
              </ul>
            </aside>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SingleCard;
