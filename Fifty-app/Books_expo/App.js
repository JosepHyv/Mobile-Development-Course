import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";

import BookCard from "./src/components/BookCard";

const Data = [
  {
    id: 1,
    title: "Ejemplo Libro 1",
  },
  {
    id: 2,
    title: "Ejemplo Libro 2",
  },
  {
    id: 3,
    title: "Ejemplo Libro iusyhdksjhdskjdhksajhdsdkjh",
  },
  {
    id: 4,
    title: "Ejemplo Libro 3",
  },
  {
    id: 5,
    title: "Ejemplo sjhdg sdjhgs djhgsd sjdhgs djshdgsjhdgsj dhgsjhd  Libro 3",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="default" />
      <FlatList
        // style={{ margin: 10 }}
        data={Data}
        renderItem={({ item }) => <BookCard Title={item.title} />}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
