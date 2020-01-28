// Example internal redirect
// Works on server-side and client-side

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = () => {
  const router = useRouter();
  
  useEffect(() => {
  // This is a client-side internal redirect
    router.push('/routing/a')
  });
  
  return <div></div>;
};

Redirect.getInitialProps = ({ res }) => {
// This is a server-side internal redirect
  if (res) {
    res.writeHead(301, {
      Location: '/routing/a'
    });
    res.end();
  }
  return { foo: 'bar' };
};

export default Redirect;
