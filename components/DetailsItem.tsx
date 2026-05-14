import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const DetailsItem = ({ label, value, icon, editing }: any) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <View
      style={[
        styles.detailsItem,
        (label == "Password" || label == "Voucher") && styles.noBorderBottom,
      ]}
    >
      <View style={styles.displayRow}>
        <Image
          source={icon}
          style={styles.icon}
          tintColor="#5C5A5A"
          resizeMode="contain"
        />
        <Text style={styles.detailsLabel}>{label}</Text>
      </View>
      {label == "Password" ? (
        <TextInput
          style={editing ? styles.focused : styles.input}
          secureTextEntry={true}
          value={inputValue}
          editable={editing}
          onChangeText={setInputValue}
          underlineColorAndroid="transparent"
        />
      ) : (
        <TextInput
          style={editing ? styles.focused : styles.input}
          value={inputValue}
          editable={editing}
          onChangeText={setInputValue}
          underlineColorAndroid="transparent"
        />
      )}
    </View>
  );
};

export default DetailsItem;

const styles = StyleSheet.create({
  input: {
    textAlign: "right",
    color: "#9C9A9A",
    fontSize: 16,
    borderColor: "transparent",
    ...Platform.select({
      ios: {
        borderColor: "transparent",
      },
      android: {
        borderColor: "transparent",
      },
    }),
  },
  focused: {
    outlineColor: "#232162",
    textAlign: "right",
    color: "#9C9A9A",
    fontSize: 16,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 5,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  detailsItem: {
    borderBottomColor: "#D8D6D6",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    paddingBottom: 7,
    borderBottomWidth: 1,
  },
  detailsLabel: {
    color: "#5C5A5A",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  noBorderBottom: {
    borderBottomWidth: 0,
  },
});
