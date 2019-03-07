import React from 'react';
import CardsContainer from './CardsContainer';

export default class List extends React.Component {
  // static contextTypes = {
  //   store: PropTypes.object.isRequired
  // };

  render() {
    return (
      <div className="list-wrapper">
          <div className="list-background">
              <div className="list">
                  <a className="more-icon sm-icon" href=""></a>
                  <div>
                      <p className="list-title">{this.props.title}</p>
                  </div>
                  <div className="add-dropdown add-top">
                      <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                      <div className="add-options"><span>...</span>
                      </div>
                  </div>

                  <div id="cards-container" data-id={`list-${this.props.id}-cards`}>
                    <CardsContainer
                      listId={this.props.id}
                    />
                  </div>

                  <div className="add-dropdown add-bottom">
                      <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
                      <a className="button">Add</a><i className="x-icon icon"></i>
                      <div className="add-options"><span>...</span>
                      </div>
                  </div>
                  <div className="add-card-toggle" data-position="bottom">Add a card...</div>
              </div>
          </div>
      </div>
    );
  }
}
