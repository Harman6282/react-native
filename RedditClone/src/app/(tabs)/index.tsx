import { Image, Text, View, StyleSheet } from "react-native";
import posts from "../../../assets/data/posts.json";
import { formatDistanceToNowStrict } from "date-fns";

export default function HomeScreen() {
  const post = posts[0];
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      {/* POST HEADER */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={{ uri: post.group.image }}
          style={styles.image}
          alt="image"
        />
        <Text style={{ fontWeight: "bold" }}>{post?.group?.name}</Text>
        <Text style={{ color: "grey" }}>
          {formatDistanceToNowStrict(new Date(post?.created_at))}
        </Text>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.joinButtonText}>Join</Text>
        </View>
      </View>

      {/* CONTENT */}

      <Text>{post?.title}</Text>
      <Image
        source={{ uri: post?.image }}
        style={{ width: "100%", aspectRatio: 4 / 3, borderRadius: 15 }}
        alt="image"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  joinButtonText: {
    backgroundColor: "#0d469b",
    color: "white",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },

  image: { width: 23, height: 23, borderRadius: 10 },
});
