import { Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
export default function MapScreen() {
  return (
    <View>
      <Text>He is map stuff</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
}
