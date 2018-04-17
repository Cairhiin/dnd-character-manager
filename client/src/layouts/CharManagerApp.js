import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import characterActions from '../actions/character';
import falcorModel from '../falcorModel';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {
  blueGrey500
} from 'material-ui/styles/colors';

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
        ['_id', 'name', 'level', 'className', 'attributes', 'alignment', 'deity']])
      .then((charRes) => charRes.json.characters);

    this.props.characterActions.charactersList(characters);
  }

  render() {
    let charJSX = [];
    for (let charKey in this.props.character) {
      let charDetails = this.props.character[charKey];
      let primaryTextJSX = (
        <p>
          <span style = {{ fontWeight: 700, color: blueGrey500, fontSize: 16 }}> { charDetails.name }</span>
          &nbsp;level&nbsp;{ charDetails.level }&nbsp;{ charDetails.className }&nbsp;of&nbsp;{charDetails.deity}
          &nbsp;({ charDetails.alignment })
        </p>
      );
      let currentCharJSX = (
        <ListItem
          primaryText = { primaryTextJSX }
          secondaryText  = {
            <p>
              STR { charDetails.attributes.strength }&nbsp;
              | DEX { charDetails.attributes.dexterity }&nbsp;
              | CON { charDetails.attributes.constitution }&nbsp;
              | INT { charDetails.attributes.intellect }&nbsp;
              | WIS { charDetails.attributes.wisdom }&nbsp;
              | CHA { charDetails.attributes.charisma }
            </p>
          }
          secondaryTextLines = {1}
        />
      );
      charJSX.push(currentCharJSX);
    }

    return (
      <div>
        <List>
          <Subheader style = {{ fontSize: 16 }}>Newest Characters</Subheader>
          { charJSX }
        </List>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharManagerApp);
