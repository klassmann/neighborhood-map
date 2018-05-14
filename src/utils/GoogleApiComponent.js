// Author: https://github.com/auser
// https://gist.github.com/auser/1d55aa3897f15d17caf21dc39b85b663#file-googleapicomponent-js

import React from 'react';
import cache from './ScriptCache';
import GoogleApi from './GoogleApi';

// const defaultMapConfig = {}

// Responsible for Wrapping a component with scriptcache
export const wrapper = (options) => (WrappedComponent) => {
  const apiKey = options.apiKey;
  const libraries = options.libraries || [];

  class Wrapper extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        tag: 'initial',
        error: false,
        loaded: false,
        map: null,
        google: null
      };
    }

    componentDidMount() {
      // const refs = this.refs;
      let { tag } = this.scriptCache.google;

      if (tag.errored) {
        this.setState({
          error: true,
          google: null
        });
      } else {
        this.scriptCache.google.onLoad((err, tag) => {
          if (err !== null) {
            this.setState({
              error: true
            });
          } else {
            this.setState({
              loaded: true,
              google: window.google
            });
          }
        });
      }
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
        places: this.props.places,
        error: this.state.error,
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
