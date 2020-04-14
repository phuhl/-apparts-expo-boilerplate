import React from "react";

import PropTypes from "prop-types";

import { View, Text, TouchableOpacity } from "react-native";



const MainScreen = ({
  onUpdate, fetching
}) => (
  <View style={{ flex: 1 }}>
  </View>
);
MainScreen.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  fetching: PropTypes.bool,
};

export default MainScreen;
