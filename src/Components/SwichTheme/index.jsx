
import { useTheme } from "../../Context/ThemeContext";
import { Switch } from "./Switch.style";

export const SwithTheme = () => {
const {darkTheme,switchTheme} = useTheme()  


  return (
    <Switch
      type="checkbox"
      checked={darkTheme}
       onClick={switchTheme}
    />
  );
};
