import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import characterActions from '../actions/character';
import falcorModel from '../falcorModel';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  characterActions: bindActionCreators(characterActions, dispatch)
});

class CharManagerApp extends Component {

  componentWillMount() {
    this._fetch();
  }

  async _fetch() {
    const charactersLength = await falcorModel
      .getValue('characters.length')
      .then((length) => length);

    const characters = await falcorModel
      .get(['characters', { from: 0, to: charactersLength - 1 },
        ['id', 'name', 'level', 'className']])
      .then((charRes) => charRes.json.characters);

    this.props.characterActions.charactersList(characters);
  }

  render() {
    console.log(this.props);
    let charJSX = [];

    for (let charKey in this.props.character) {
      const charDetails = this.props.character[charKey];
      const currentCharJSX = (
        <div key = { charKey }>
          <h2>{ charDetails.name }</h2>
          <h3>LVL { charDetails.level } { charDetails.className }</h3>
        </div>
      );
      charJSX.push(currentCharJSX);
    }

    return (
      <div>
        <h1>Character Manager App</h1>
        { charJSX }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharManagerApp);
