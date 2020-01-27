import React from 'react'

const Redirect = () => {
    return (
        <div>
            <p> routing/redirect </p>
        </div>
    )
}


Redirect.getInitialProps = ({ res }) => {

    if (res) {
      res.writeHead(301, {
        Location: '/routing/a'
      });
      res.end();
    }
  
    return {};
  };

export default Redirect;