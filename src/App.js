import { ThemeProvider } from "styled-components";
import { GamesProvider } from "./Context/Index";
import { GlobalStyled } from "./GlobalStyles";
import { Routers } from "./Routes/Router";
import {styled } from './style/BasicStyles'
function App() {
  return (
    <ThemeProvider theme={styled}>
      <GamesProvider>
      <GlobalStyled/>
      <Routers />
      </GamesProvider>
    </ThemeProvider>
  );
}

export default App;
