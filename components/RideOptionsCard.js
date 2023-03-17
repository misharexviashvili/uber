import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectTime } from "../slices/navSlice";
const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];
const SURGE_CHARGE_RATE = 1.05;
const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();
  const travelTimeInformation = useSelector(selectTime);
  return (
    <View style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-2 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-8 ${
              id === selected?.id ? "bg-gray-200" : null
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 90,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text} travel time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GEL",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 mb-1 mx-2 ${
            !selected ? "bg-gray-300" : null
          }`}
        >
          <Text style={tw`text-center text-white text-xl `}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideOptionsCard;
