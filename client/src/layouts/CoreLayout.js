import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div>
        <span>
          Links: <Link to = '/login'>Login</Link> | <Link to = '/'>Home Page</Link>
        </span>
        <br />
        { this.props.children }
      </div>
    );
  }
}

export default CoreLayout;
