import React from "react";
import ReactNative from "react-native";

const Button = ({ onPress, children }) => {
  //destructing
  const { buttonStyle, textStyle } = styles;

  return (
    <ReactNative.TouchableOpacity onPress={onPress} style={buttonStyle}>
      <ReactNative.Text style={textStyle}>
        {children}
      </ReactNative.Text>
    </ReactNative.TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#777aff",
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
