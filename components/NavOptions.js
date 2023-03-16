import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "twrnc";
const data = [
  {
    id: 123,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 456,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 mr-2 w-40 `}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              type="antdesign"
              name="arrowright"
              color="#fff"
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
