import Colors from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

// import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import ProductListItem from "@/src/components/ProductListItem";
import products from "@/assets/data/products";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
