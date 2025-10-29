import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import groups from "../../../assets/data/groups.json";
import { useSetAtom } from "jotai";
import { selectedGroupAtom } from "../../atoms";
import { Group } from "../../types";

export default function groupSelector() {
  const [searchValue, setSearchValue] = useState<string>("");
  const setGroup = useSetAtom(selectedGroupAtom);

  const filteredGroups = groups.filter((group) =>
    group.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const onGroupSeleted = (group: Group) => {
    setGroup(group);
    router.back();
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <AntDesign
          name="close"
          size={26}
          color={"black"}
          onPress={() => router.back()}
        />

        <Text style={styles.headerText}>Post to</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "lightgrey",
          borderRadius: 5,
          gap: 5,
          marginVertical: 10,
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <AntDesign name="search" size={16} color="gray" />
        <TextInput
          placeholder="Search for a community"
          placeholderTextColor={"grey"}
          style={{ paddingVertical: 10, flex: 1 }}
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
        {searchValue && (
          <AntDesign
            name="close-circle"
            size={15}
            color="#232323ff"
            onPress={() => setSearchValue("")}
          />
        )}
      </View>

      <FlatList
        data={filteredGroups}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setGroup(item)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 20,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 40, aspectRatio: 1, borderRadius: 20 }}
            />
            <Text style={{ fontWeight: "600" }}>{item.name}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    paddingRight: 30,
  },
});
