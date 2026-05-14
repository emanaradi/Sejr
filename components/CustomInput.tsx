import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const { width, height } = Dimensions.get("window");

const CustomInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  icon,
  KeyboardType,
  ...props
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {icon === "email" && (
        <Image source={icons.email} resizeMode="contain" style={styles.icon} />
      )}

      {icon === "lock" && (
        <Image source={icons.lock} resizeMode="contain" style={styles.icon} />
      )}

      {icon === "person" && (
        <Image source={icons.person} resizeMode="contain" style={styles.icon} />
      )}

      {icon === "calender" && (
        <Image
          source={icons.calender}
          resizeMode="contain"
          style={styles.icon}
        />
      )}

      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        secureTextEntry={title === "password" && !showPassword}
        placeholderTextColor="#7B7B7B"
        {...props}
        editable={true}
        keyboardType="default"
        style={[styles.textInput, { zIndex: 1 }]}
      />

      {title === "password" && (
        <TouchableOpacity
          style={{ position: "relative" }}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <Image
            source={!showPassword ? icons.eye : icons.eyehide}
            resizeMode="contain"
            style={styles.eye}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#7B7B7B",
    width: width * 0.8,
    height: 55,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    overflow: "hidden",
    gap: 10,
  },
  textInput: {
    width: width * 0.55,
    height: 55,
    padding: 10,
    fontSize: 16,
  },
  eye: {},
  icon: {},
});

export default CustomInput;
