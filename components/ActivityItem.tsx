import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { width, height } from "../lib/data";

const ActivityItem = ({ title, subtitle, image, margin }: any) => {
  return (
    <View>
      <View style={[styles.container, margin && styles.marginRight]}>
        <Image style={styles.image} source={image} resizeMode="stretch" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default ActivityItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "flex-start",
    borderRadius: 20,
    width: width * 0.86,
    paddingBottom: 20,
    boxShadow: "2px 2px 10px #C5C5C5",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Tommy-Regular",
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 15,
  },
  subtitle: {
    fontFamily: "Tommy-Light",
    paddingLeft: 20,
    color: "#6D6D6D",
  },
  image: {
    width: width * 0.86,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  marginRight: {
    marginRight: 20,
  },
});
