import React from 'react';
import Layout from '@theme/Layout';

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
          textAlign: 'center',
        }}>
        <div>
          <h1>404 - Page Not Found</h1>
          <p>We could not find what you were looking for.</p>
          <p>
            Please contact the owner of the site that linked you to the
            original URL and let them know their link is broken.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
