import { useState } from "react";
import { GamesProvider, useGameData } from "./Context/Index";
import { AppThemeProvider } from "./Context/ThemeContext";
import { GlobalStyled } from "./GlobalStyles";
import { Routers } from "./Routes/Router";

function App() {

  
  
return (
    <AppThemeProvider>
      <GamesProvider >
      <GlobalStyled/>
      <Routers />
      </GamesProvider>
    </AppThemeProvider>
  );
}

export default App;
