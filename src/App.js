import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./GlobalStyles";
import { Routers } from "./Routes/Router";
import {styled } from './style/BasicStyles'
function App() {
  return (
    <ThemeProvider theme={styled}>
      <GlobalStyled/>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
