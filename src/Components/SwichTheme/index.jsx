import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useTheme } from "../../Context/ThemeContext";
import { Switch, SwitchContainer } from "./Switch.style";

export const SwithTheme = () => {
const {darkTheme,switchTheme} = useTheme()  


  return (
    <SwitchContainer>
<BsFillSunFill/>
      <Switch
        type="checkbox"
        checked={darkTheme}
        onChange={switchTheme}
        />
         <BsFillMoonFill/> 
        
      
    </SwitchContainer>
  );
};
