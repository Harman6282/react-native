import { Text, View } from "react-native";
import "../global.css"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-gray-900 text-3xl">Hi, there</Text>
    </View>
  );
}
