import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { images } from "../constants/index.js";

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const watch = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.ParentContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <View>
              <Text style={styles.CancelText}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.ImageContainer}>
            <Image style={styles.VidWatchGirl} source={images.watchvidGirl} />
          </View>
        </View>
        <View style={styles.BottomContainer}>
          <Text style={[styles.LockedText, styles.bold]}>Locked</Text>
          <Text style={styles.LockedText}>
            Watch a video to unlock all discounts for the day!
          </Text>
          <Image style={styles.youtube} source={images.youtube} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default watch;

const styles = StyleSheet.create({
  safeArea: {
    //padding: 25,
    paddingTop: 50,
    //paddingBottom: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  ParentContainer: {
    flex: 1,
  },
  CancelText: {
    color: "#959393",
    fontFamily: "Tommy-Light",
    paddingLeft: 25,
  },
  VidWatchGirl: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.5,
  },
  ImageContainer: {
    display: "flex",
    alignItems: "center",
  },
  topContainer: {
    flex: 1,
  },
  BottomContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    padding: 25,
    boxShadow: "0px 0px 40px #b2b1b1",
    display: "flex",
    alignItems: "center",
    gap: 40,
  },
  LockedText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Tommy-Light",
    paddingTop: 20,
    color: "#242323",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 26,
  },
  youtube: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.07,
  },
});
