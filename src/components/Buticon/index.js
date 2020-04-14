import React from "react";
import PropTypes from "prop-types";
import * as Icons from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";

const Buticon = ({ name, type, size, color, onPress, ...rest }) => {
  const Icon = Icons[type];
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <Icon name={name} size={size} color={color}/>
    </TouchableOpacity>
  );
};
Buticon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired
};

export default Buticon;
