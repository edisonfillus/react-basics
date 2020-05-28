import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DataTableExample } from './components/DataTable/DataTable';
import { Container } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <DataTableExample />
      </Container>
      
    </>
   
  );
}

export default App;
