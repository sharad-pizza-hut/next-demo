import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../src/actions/test';
import Examples from '../src/components/Examples';

// Next
import Link from '../src/Link';


// MUI
import Button from '@material-ui/core/Button';


class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));
    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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

export default connect()(Index);
