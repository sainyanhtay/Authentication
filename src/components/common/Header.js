import React from "react";
import ReactNative from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles; //destructing object

  return (
    <ReactNative.View style={viewStyle}>
      <ReactNative.Text style={textStyle}>
        {props.headerText}
      </ReactNative.Text>
    </ReactNative.View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 25,
    color: '#000'
  }
};

export { Header };
