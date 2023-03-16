import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Text>He is map stuff</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigatdCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
