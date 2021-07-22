import MainPage from './pages/MainPage';
import MenuPageOne from './pages/MenuPageOne';
import React, { useState } from 'react'
import './App.css';
import ButtonIcon from './components/ButtonIcon';
import { createMuiTheme, Snackbar, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import SnackbarComponent from './components/SnackbarComponent'



export const ShowContext = React.createContext()

const theme = createMuiTheme({
  // You get the objects from the documentation
  palette: {
      primary: {
          main: '#630068'
      },
      // secondary: purple
  },
  typography: {
      fontFamily: 'Lato',
  }
})

function App() {

  const [ showHeader, setShowHeader ] = useState(true)

  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <ShowContext.Provider value={showHeader}> */}
          <MainPage />
          {/* <MenuPageOne /> */}
          {/* <ButtonIcon /> */}
        {/* </ShowContext.Provider> */}
        <SnackbarComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
