import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const EditButton = ({ handlePress, editing }: any) => {
  return (
    <TouchableOpacity
      style={[styles.editButton, editing && { backgroundColor: "#303C90" }]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={styles.whiteText}>{editing ? `Save` : `Edit`}</Text>
    </TouchableOpacity>
  );
};

export default EditButton;

const styles = StyleSheet.create({
  editButton: {
    backgroundColor: "#5F5E5E",
    borderRadius: 9,
    padding: 10,
    width: 100,
    display: "flex",
    alignItems: "center",
    height: 35,
  },
  whiteText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Tommy-Light",
  },
});
