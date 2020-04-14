import { Platform, Alert as RNAlert } from "react-native";


class Alert {
  static alert (...args) {
    if (Platform.OS === "web"){
      alert(args[1] || args[0]);
    } else {
      RNAlert.alert(...args);
    }
  }
}

export default Alert;
