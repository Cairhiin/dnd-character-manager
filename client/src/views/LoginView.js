import React, { Component } from 'react';
import Falcor from 'falcor';
import falcorModel from '../falcorModel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({

});

class LoginView extends Component {
  render () {
    return (
      <div>
        <h1>Login view</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
