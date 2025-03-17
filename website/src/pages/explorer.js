import React from 'react';
import Layout from '@theme/Layout';

function IFrameExplorer() {
  return (
    <Layout>
      <iframe
        style={{ height: '90vh', width: '100%' }}
        frameBorder="0"
        src="https://start.gg/developer/explorer/embed"></iframe>
    </Layout>
  );
}

export default IFrameExplorer;
