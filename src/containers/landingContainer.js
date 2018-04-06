import React, { Component } from 'react';
import axios from 'axios';
import { LandingPage } from '../components/pages';

export class LandingContainer extends Component {
  async componentDidMount() {
    axios.get({
    });
  };

  render() {
    return (<LandingPage {...this.props} />);
  };
};
