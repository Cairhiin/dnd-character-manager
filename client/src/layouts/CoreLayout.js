import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import AppBar from 'material-ui/AppBar';
import {
  blueGrey50,
  blueGrey200,
  blueGrey300,
  blueGrey500,
  blueGrey600,
  blueGrey900,
} from 'material-ui/styles/colors';

class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    const muiTheme = getMuiTheme(darkBaseTheme, {
      appBar: {
        color: blueGrey900,
        textColor: blueGrey50
      },
      raisedButton: {
        primaryColor: blueGrey300
      },
      paper: {
        color: blueGrey200
      },
      stepper: {
        iconColor: blueGrey600,
        textColor: blueGrey500,
        disabledTextColor: blueGrey300,
        connectorLineColor: blueGrey500,
        inactiveIconColor: blueGrey300
      },
      tableHeaderColumn: {
        textColor: blueGrey500
      },
      userAgent: 'all'
    });

    const buttonStyle = {
      margin: 5
    };
    const homeIconStyle = {
      margin: 5,
      paddingTop: 5
    };

    const appbarStyle = {
        margin: 0
    };

    let menuLinksJSX;
    let homePageButtonJSX = (
      <Link to = '/'>
        <RaisedButton label = { <ActionHome /> } style = { homeIconStyle } />
      </Link>
    );

    return (
      <MuiThemeProvider muiTheme = { muiTheme }>
        <div>
          <AppBar
            style = { appbarStyle }
            title = 'D&D Character Manager'
          />
          <br />
          <span>
            Links: <Link to = '/login'>Login</Link> | <Link to = '/register'>Register</Link> | <Link to = '/'>Home</Link> 
          </span>
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CoreLayout;
