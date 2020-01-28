import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// SEO
import { NextSeo } from 'next-seo';

// Components
import Link from '../../src/components/Common/Link';

// Styles
const useStyles = makeStyles(theme => ({
  list: {
    listStyleType: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr'
  }
}));

const Routing = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title="routing/index"
          description="This is the routing/index page. This is being set by the NextSEO component."
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Routing Examples
        </Typography>
        <br />
        <div className={classes.list}>
          <Link href="/routing/a" color="secondary">
            <Typography variant="h5" component="h3" gutterBottom>
              Normal Route: /a
            </Typography>
          </Link>
          <Link href="/routing/foo" color="secondary">
            <Typography variant="h5" component="h3" gutterBottom>
              Dynamic Route /[:id]
            </Typography>
          </Link>
          <Link href="/routing/foo/bar/baz" color="secondary">
            <Typography variant="h5" component="h3" gutterBottom>
              Catchall route /**
            </Typography>
          </Link>
          <Link href="/routing/internalredirect" color="secondary">
            <Typography variant="h5" component="h3" gutterBottom>
              Internal Redirect to /a
            </Typography>
          </Link>
          <Link href="/routing/externalredirect" color="secondary">
            <Typography variant="h5" component="h3" gutterBottom>
              External Redirect to google.
            </Typography>
          </Link>
        </div>
        <br />
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go Back to Main Page
        </Button>
      </Box>
    </Container>
  );
};

export default Routing;
