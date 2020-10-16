import { makeStyles } from '@material-ui/styles';
import * as ApiTypes from '@packages/backend-ms-gateway/build/src/types/User';
import React from 'react';

import logo from './logo.svg';

const useStyles = makeStyles({
  App: {
    textAlign: 'center',
  },
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  AppLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  AppLink: {
    color: '#61dafb',
  },
});

function App() {
  const styles = useStyles();

  const user: ApiTypes.User = { name: 'Bob' };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>The user is named {user.name}</p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
