import { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from '../src/routes/AppRouter';

function App() {
  return (
    <Fragment>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </Fragment>
  );
}

export default App;
