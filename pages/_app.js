import '../styles/globals.scss'
import React, {useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Head>
        <title>Showdown - Wheel</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        /> 
      </Head>
      
          <div className='container'>
              <Component {...pageProps} />
          </div>
      
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

