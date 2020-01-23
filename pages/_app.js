import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';

// MUI
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

// REDUX
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Next Demo</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
            key="viewport"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Fragment>
    );
  }
}


export default withReduxStore(MyApp)