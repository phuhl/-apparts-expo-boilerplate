import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import { MainScreen } from "../screens";

export default createBrowserApp(
  createSwitchNavigator({
    MainScreen
  })
);


