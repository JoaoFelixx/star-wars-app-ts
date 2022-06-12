import Routes from 'Router';
import { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import { StarWarsProvider } from 'Context/StarWarsProvider';
import { 
  GlobalStyle, 
  iconSettings, 
  themeSettings,
} from 'styles';

function App() {
  return (
    <ThemeProvider theme={themeSettings}>
      <IconContext.Provider value={iconSettings} >
        <GlobalStyle />
        <StarWarsProvider>
          <Routes />
        </StarWarsProvider>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;