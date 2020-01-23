import React, { Fragment } from 'react';

// MUI Components
import Button from '@material-ui/core/Button';

// Components
import Link from '../Common/Link';
import Examples from './Examples';

class Index extends React.Component {

    componentDidMount() {
      this.timer = this.props.startClock();
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

  export default Index