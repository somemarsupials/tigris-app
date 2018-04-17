import React, { Component } from 'react';
import { HomePage } from '../components/pages';

export default class HomeContainer extends Component {
  render() {
    return (
      <HomePage {...this.props} />
    );
  }
}
