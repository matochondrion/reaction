import React from 'react';
import Board from './Board.jsx';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    let cards = this.context.store.getState().cards.filter((card) => {
      console.log(card.id);
      return card.list_id === this.props.listId;
    });

    cards = cards.map((card) => {
        return (
          <Card
          key={card.id}
          {...card}
        />);
    });

    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default CardsContainer;
