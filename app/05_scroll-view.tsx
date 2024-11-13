import React from "react";
import { View, Text, ScrollView } from "react-native";

const ScrollViewScreen = () => {

  return (
    <ScrollView>
      <Text style={{ margin: 10 }}>Hello World</Text>
      <View style={{ marginTop: 512 }} />
      <Text style={{ margin: 10 }}>Welcome to React Native</Text>
    </ScrollView>
  );
};

export default ScrollViewScreen;
