import React from "react";
import ReactNative from "react-native";

//functional component
const Card = props =>
  <ReactNative.View style={styles.containerStyle}>
    {props.children}
  </ReactNative.View>;

//object
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
