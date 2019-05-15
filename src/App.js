import React from 'react';
import Etho from './components/Etho';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette:{
    primary:{
      main: pink[800]
    },
    secondary:{
      main: purple[800],
      light:purple.A400,
      dark:purple.A700
    },
    type:'light'
  }
})

function App() {
  return (
    <MuiThemeProvider theme = {theme}>
      <div className="App">
        <Etho />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
