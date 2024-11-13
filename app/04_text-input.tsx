import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const TextInputScreen = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 15}}>
      <TextInput
        style={{height: 50}}
        placeholder="Enter name"
        onChangeText={name => setText(name)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 30}}>{text}</Text>
    </View>
  );
};

export default TextInputScreen;
