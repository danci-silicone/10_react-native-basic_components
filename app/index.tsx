import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Link href="/01_view">View Example</Link>
      <Link href="/02_text">Text Example</Link>
      <Link href="/03_image">Image Example</Link>
      <Link href="/04_text-input">TextInput Example</Link>
      <Link href="/05_scroll-view">ScrollView Example</Link>
      <Link href="/06_scroll-view_table">ScrollView Table Example</Link>
      <Link href="/07_style-sheet">StyleSheet Example</Link>
    </View>
  );
}
