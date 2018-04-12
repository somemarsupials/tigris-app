import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { CallbackPage } from '../components/pages';
import callbackActions from '../actions/callback';

export class CallbackContainer extends Component {
  componentDidMount() {
    this.props.getToken(this.props.match.params.provider);
  };

  render(windowObject = window) {
    if (this.props.success) {
      windowObject.close();
    };

    return (
      <CallbackPage />
    );
  };
};

export function mapStateToProps(state) {
  return {
    success: state.callback.success,
    failure: state.callback.failure,
  };
};

export function mapDispatchToState(dispatch) {
  return {
    getToken: provider => {
      dispatch(callbackActions.getToken(provider));
    },
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(CallbackContainer);
