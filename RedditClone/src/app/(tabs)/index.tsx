import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

export default function HomeScreen() {
  return (
    <View>
      {/* {posts.map((p) => (
        <PostListItem post={posts[0]} />
      ))} */}

      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </View>
  );
}
