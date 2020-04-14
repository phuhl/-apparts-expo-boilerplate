import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Screen } from "../../components";

import Display from "./Display";

export class MainScreen extends Screen({}) {
  constructor() {
    super();
  }

  onUpdate = () => {

  };

  render() {
    return (
      <Display
        onUpdate={this.onUpdate}
        fetching={!!this.props.fetching}
      />
    );
  }
}
MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  fetching: PropTypes.bool
};

export default connect(
  ({}) => ({}), {})(MainScreen);
