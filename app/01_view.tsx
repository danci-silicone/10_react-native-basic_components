import React from "react";
import { View, Text } from "react-native";

const ViewScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Simple background color */}
      <View style={{ padding: 10, backgroundColor: "lightblue" }}>
        <Text>Text with background color</Text>
      </View>
    </View>
  );
};

export default ViewScreen;
