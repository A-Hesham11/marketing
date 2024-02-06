import { Fragment } from 'react';
import './App.css';
import AllRoutesProvider from './components/routing/allRoutes';

function App() {

  return (
    <Fragment>
      <AllRoutesProvider />
    </Fragment>
  );
}

export default App;
