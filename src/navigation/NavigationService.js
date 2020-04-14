import { NavigationActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  try {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  } catch (e) {
    console.log(e);
  }
}

export default {
  navigate,
  setTopLevelNavigator
};
