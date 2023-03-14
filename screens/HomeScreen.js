import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { Image } from "react-native";
import NavOptions from "../components/NavOptions";
export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
