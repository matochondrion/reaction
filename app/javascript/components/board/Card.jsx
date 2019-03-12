import React from 'react';
import Board from './Board.jsx';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

class Card extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  handleCardClick = () => {
    const cardId = this.props.id;
    this.context.store.dispatch(actions.setActiveCard(cardId));
  }

  render() {
    const labels = this.props.labels.map((label, idx) => (
      <div key={idx}
        className={`card-label ${label} colorblindable`}>
      </div>
    ));

    return (
      <div 
        className="card-background"
        onClick={this.handleCardClick}
      >
        <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
            <div className="card-info">
                {labels}
                <p>{this.props.title}</p>
            </div>
            <div className="card-icons">
              <i className="clock-icon sm-icon overdue-recent completed">{this.props.due_date}</i>
              <i className="description-icon sm-icon"></i>
              <i className="comment-icon sm-icon"></i>
            </div>
        </div>
     </div>
    );
  }
}

export default Card;
