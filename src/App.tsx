import Routes from 'Router';
import { GlobalStyle, themeSettings } from 'styles';
import { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import { StarWarsProvider } from 'Context/StarWarsProvider';

function App() {
  return (
    <ThemeProvider theme={themeSettings}>
      <IconContext.Provider value={{ size: '20px', color: '#ff0062', className: "global-class-name" }} >
        <GlobalStyle />
        <StarWarsProvider>
          <Routes />
        </StarWarsProvider>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;