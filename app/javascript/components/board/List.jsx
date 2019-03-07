import React from 'react';
import CardsContainer from './CardsContainer';
import ChangeTitleForm from './ChangeTitleForm';

export default class List extends React.Component {
  // static contextTypes = {
  //   store: PropTypes.object.isRequired
  // };

  // when someone clicks on list-title
  // it replaces the p tag with a changeTitleForm
  // <p className="list-title">{this.props.title}</p>

  componentDidMount() {
    this.setState({
      editableTitle: false
    })
  }

  handleTitleClick = (evt) => (
    this.setState({
      editableTitle: true
    })
  );

  handleOnBlur = (evt) => (
    this.setState({
      editableTitle: false
    })
  );

  render() {
    return (
      <div className="list-wrapper">
          <div className="list-background">
              <div className="list">
                  <a className="more-icon sm-icon" href=""></a>
                  <div>
                      {
                        this.state.editableTitle ?
                        (<ChangeTitleForm
                          title={this.props.title}
                          onBlur={this.handleOnBlur}
                        />) :
                        (<p 
                          className="list-title">{this.props.title}
                          onClick={this.handleTitleClick}
                        </p>)
                      }
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
