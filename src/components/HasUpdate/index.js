import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Updates from "expo-updates";
import strings from "./strings";
import Buticon from "../Buticon";
import styles from "../../helpers/styles";

const HasUpdate = ({ color = "#3b3", fgcolor = "#efe" }) => {
  const [ hasUpdate, setHasUpdate ] = useState(false);

  useEffect(async () => {
    if (!hasUpdate) {
      await Updates.checkForUpdateAsync();
      await Updates.fetchUpdateAsync();
      setHasUpdate(true);
    }
  }, []);

  const handleUpdate = () => {
    Updates.reloadAsync();
  };

  if (hasUpdate) {
    return (
      <View style={{ position: "fixed", width: "100%" }}>
        <View style={[{ maxWidth: 400, flex: 1,
                        justifySelf: "center", alignSelf: "center",
                        backgroundColor: color, flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                        padding: 20 }, styles.shadow ]}>
          <Text style={{ color: fgcolor, fontSize: 20 }}>
            {strings.hasUpdate}
          </Text>
          <Buticon type="AntDesign" name="reload1" size={32}
            style={{ borderWidth: 2, borderColor: fgcolor,
                     borderRadius: 100,
                     width: 60, height: 60,
                     justifyContent: "center", alignItems: "center",
                     paddingBottom: 3, margin: 10
            }}
            onPress={handleUpdate} color={fgcolor}/>
          <Buticon type="AntDesign" name="closecircleo"
            style={{ alignSelf: "flex-start", marginLeft: 10 }}
            onPress={() => setHasUpdate(false)} color={fgcolor}/>
        </View>
      </View>);
  } else {
    return null;
  }
};

export default HasUpdate;
