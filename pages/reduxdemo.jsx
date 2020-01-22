import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  serverRenderClock,
  startClock
} from '../src/actions/test';
import Examples from '../src/components/Examples';

// Next
import Link from '../src/Link';

// MUI
import Button from '@material-ui/core/Button';

class Index extends React.Component {

  static getInitialProps(ctx) {
    const { req, reduxStore } = ctx

    // If req is populated, then it's serverside
    // If req is empty, then it's clientside
    const isServer = !!req

    // Dispatch an action on the serverside render 
    // This simply changes the background color of the clock to #000 to showcase the server render of the clock 
    reduxStore.dispatch(serverRenderClock(isServer))

    // Return no props 
    return {}
  }

  componentDidMount() {
    // Start Clock
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <Fragment>
        <Examples />
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go to the main page
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  example: state.example
});

const mapDispatchToProps = dispatch => ({
  startClock: () => setInterval(() => {
    dispatch(startClock(true))
  }, 1000)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
