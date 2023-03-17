import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={tw`bg-gray-100 absolute top-10 left-4 z-50 p-3 rounded-full shadow-lg`}
      onPress={()=>navigation.navigate("HomeScreen")}>
        <Icon name="menu" />
      </TouchableOpacity>
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
