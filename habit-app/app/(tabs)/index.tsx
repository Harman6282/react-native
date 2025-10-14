import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={style.View}>
      <Text>Harman app.</Text>
    </View>
  );
}

const style = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 30,
    backgroundColor: "orange",
    borderRadius: 15,
    textAlign: "center",
    padding: 5,
  },
});
