import React from "react";
import ReactNative from "react-native";

const Spinner = ({ size }) => {
  return (
    <ReactNative.View style={styles.spinnerStyle}>
      <ReactNative.ActivityIndicator size={size || "large"} />
    </ReactNative.View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { Spinner };
