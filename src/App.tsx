import React from 'react';

import Layout from './components/Layout';
import About from './components/About';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <>
      <Layout>
        <About />
        <WorkExperience />
      </Layout>
    </>
  );
}

export default App;
