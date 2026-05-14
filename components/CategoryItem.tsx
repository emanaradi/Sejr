import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const CategoryItem = ({ image, name }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="contain" />
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
