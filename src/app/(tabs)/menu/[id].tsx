import { View, Text } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: "Details " + id }} />
      <Text>ProductDetailsScreen: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
