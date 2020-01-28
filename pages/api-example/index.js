import React from 'react';

// MUI
import { Link, Container, Typography, Button, Box } from '@material-ui/core';

export default function Demo() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h2">API examples</Typography>
        <br />
        <Link href="/api/links/1" color="secondary">
          <Typography variant="h5" component="h3" gutterBottom>
            /api/link/1
          </Typography>
        </Link>
        <br />
        <Link href="/api/links/2" color="secondary">
          <Typography variant="h5" component="h3" gutterBottom>
            /api/link/2
          </Typography>
        </Link>
        <br />
        <Link href="/api/links/3" color="secondary">
          <Typography variant="h5" component="h3" gutterBottom>
            /api/link/3 <em>(this will 404)</em>
          </Typography>
        </Link>
        <br />
        <Button variant="contained" component={Link} href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  );
}
