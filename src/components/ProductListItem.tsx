import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "@components/Themed";
import Colors from "../constants/Colors";
import { Product } from "@/types";
import { Link } from "expo-router";

export const DefaultPizzaImage =
  "https://img.freepik.com/free-photo/top-view-sliced-pomegranates-with-various-ingredients_140725-85015.jpg?t=st=1712815093~exp=1712818693~hmac=8a7d060b8c7cac15743504b77b4ac1891b41d188f43239861fc72ef4545b5635&w=1380";

interface Props {
  product: Product;
}

const ProductListItem = ({ product }: Props) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image || DefaultPizzaImage }}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
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
