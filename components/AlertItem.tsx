import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { width } from "../lib/data";

const AlertItem = ({ image, description, store }: any) => {
  return (
    <View style={styles.alertItem}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <View style={styles.column}>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Try Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlertItem;

const styles = StyleSheet.create({
  alertItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    gap: 20,
    backgroundColor: "#F3F3FC",
    borderBottomColor: "#C5C5C5",
    borderBottomWidth: 1,
    width: width,
  },
  image: {
    width: 50,
    height: 50,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flex: 1,
  },
  description: {
    flexShrink: 1,
    fontSize: 17,
  },
  button: {
    borderWidth: 2,
    borderColor: "#232162",
    padding: 10,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#232162",
    fontSize: 16,
    fontWeight: 600,
  },
});
