import { StyleSheet, Image } from "react-native";
import { Text, View } from "@/src/components/Themed";
import Colors from "../constants/Colors";

interface props {
  product: {
    name: string;
    price: number;
    image: string;
  };
}

const ProductListItem = ({ product }: props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
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

export default ProductListItem;
