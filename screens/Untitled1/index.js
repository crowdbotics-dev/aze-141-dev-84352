import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable onPress={() => {
        navigation.navigate("Youtube Player");
      }}><View style={styles.Jkavbodw}>
          Button
        </View></Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  Jkavbodw: {
    height: 60,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#281ac3",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled1;