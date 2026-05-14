import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
import { width, height } from "../lib/data";

const EventItem = ({ name, location, image }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="contain" />

      <Text style={styles.name}>{name}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          source={icons.locationFilled}
          resizeMode="contain"
          tintColor="#4F5380"
        />
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    paddingBottom: 20,
  },

  name: {
    fontWeight: 600,
    color: "#03013B",
    fontSize: 17,
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  location: {
    fontFamily: "Tommy-Light",
    color: "#4F5380",
    fontSize: 15,
    paddingLeft: 5,
  },
  image: {
    borderRadius: 20,
  },
});
