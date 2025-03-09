import React, { useEffect }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout';

function App() {

  useEffect(() => {
    console.log("✅ App.tsx is loaded!");
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;