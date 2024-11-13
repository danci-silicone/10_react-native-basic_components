import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImageScreen = () => {
  return (
    <View style={styles.container}>   
      <Image
      style={styles.image}
        source={{
          uri: "https://life-decor.com/cdn/shop/products/zidne-slike-moderne_0f0a26d2-0adb-4b8f-b67b-3908d448af3b_1500x900.jpg",
        }}
      />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  image: {
    width: 1500,
    height: 900,
  },
});

export default ImageScreen;
