// Author: https://github.com/auser
// https://gist.github.com/auser/1d55aa3897f15d17caf21dc39b85b663#file-googleapicomponent-js

import React from 'react';
import cache from './ScriptCache';
import GoogleApi from './GoogleApi';

// const defaultMapConfig = {}

export const wrapper = (options) => (WrappedComponent) => {
  const apiKey = options.apiKey;
  const libraries = options.libraries || [];

  class Wrapper extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        loaded: false,
        map: null,
        google: null
      }
    }

    componentDidMount() {
      // const refs = this.refs;
      this.scriptCache.google.onLoad((err, tag) => {
        // const props = Object.assign({}, this.props, {
        //   loaded: this.state.loaded
        // });

        this.setState({
          loaded: true,
          google: window.google
        })
      });
    }

    componentWillMount() {
      this.scriptCache = cache({
        google: GoogleApi({
          apiKey: apiKey,
          libraries: libraries
        })
      });
    }

    render() {
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded,
        google: this.state.google,
      })
      return (
        <WrappedComponent {...props} />
      );
    }
  }

  return Wrapper;
}

export default wrapper;
