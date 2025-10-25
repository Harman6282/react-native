import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";

export default function DetailedPost() {
  const { id } = useLocalSearchParams();
  const detailedPost = posts.find((post) => post.id === id);

  if (!detailedPost) {
    return <Text>Post not found</Text>;
  }
  return (
    <View>
      <Text>Post id is {id}</Text>
      <PostListItem post={detailedPost} isDetailedPost />
    </View>
  );
}
