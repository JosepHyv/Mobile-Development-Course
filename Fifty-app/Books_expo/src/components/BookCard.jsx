import { View, Text, Image, StyleSheet } from "react-native";

const BookCard = ({
  ImageUri = require("../../assets/no-image.png"),
  Title = "No Title",
}) => {
  const transformedTitle =
    Title.length > 25 ? Title.slice(0, 23) + "..." : Title;
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={ImageUri} />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.name}>{transformedTitle}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    // borderWidth: 1,
    gap: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    borderRadius: 18,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 18,
    resizeMode: "contain",
  },
  titleContainer: {
    width: 100,
    height: 37,
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  name: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "500",
    color: "black",
    textTransform: "capitalize",
  },
});

export default BookCard;
