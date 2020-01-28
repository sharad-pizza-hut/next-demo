import React, { Component } from 'react';

// Actions
import { serverRenderClock } from '../../src/actions/clock'

// Containers
import ReduxExample from '../../src/containers/ReduxExample';

class Index extends Component {
  /***
    Currently, this getInitialProps only servers to dispatch an action to update the clock time at the initial serverside render.
    Since it actions cannot be dispatched via props at the serverside render, you must use the reduxStore dispatch the action directly.

    If you remove this getInitialProps, all that would happen is that the clock doesn't get initialized with the time upon the first server-side render,
    but begins updating every second once the client side renders.
  ***/
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req

    // Force dispatch a redux action on the server-side render
    // This action just updates the store with the current time to display on the clock.
    // If you comment this out, the clock would just show 00:00:00 until the client render updates the time (the next second).
    reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  // Renders a container
  render() {
    return <ReduxExample />;
  }
}

export default Index;
