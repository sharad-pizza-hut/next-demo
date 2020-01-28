// Example internal redirect 
// This is a server-side internal redirect
import React from 'react';

const Redirect = () => {
  return (
    <div>
     
    </div>
  );
};

Redirect.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(301, {
      Location: '/routing/a'
    });
    res.end();
  }

  return {foo:"bar"};
};

export default Redirect;
