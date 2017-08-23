import React from "react";
import ReactNative from "react-native";

const CardSection = props =>
  <ReactNative.View style={styles.containerStyle}>
    {props.children}
  </ReactNative.View>;

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export { CardSection };
