import { createSwitchNavigator, createAppContainer } from "react-navigation";

import { MainScreen } from "../screens";

export default createAppContainer(
  createSwitchNavigator({
    MainScreen,
  })
);
