import React from 'react';

// MUI Components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
      <Container maxWidth="sm">
        <Box my={4}>
          <Examples />
          <br />
          <Button
            variant="contained"
            color="primary"
            component={Link}
            naked
            href="/"
          >
            Go to the main page
          </Button>
        </Box>
      </Container>
    );
  }
}

export default Index;
