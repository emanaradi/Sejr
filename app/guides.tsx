import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { images } from "../constants/index.js";
import { CustomButton } from "../components";
import { router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const guides = () => {
  const [guideNum, setGuideNum] = useState(1);

  const setGuide = () => {
    if (guideNum < 4) {
      setGuideNum(guideNum + 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaProvider>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="default"
          showHideTransition="fade"
          hidden={true}
        />
        <View style={styles.container}>
          <View>
            <Image source={images.sejr} />
          </View>

          <View style={styles.pictureStepperContainer}>
            {guideNum === 1 && <Image source={images.watchvid} />}
            {guideNum === 2 && <Image source={images.survey} />}
            {guideNum === 3 && <Image source={images.event} />}
            {guideNum === 4 && <Image source={images.voucher} />}
          </View>

          <View style={styles.stepper}>
            <View
              style={guideNum === 1 ? styles.activeItem : styles.item}
            ></View>
            <View
              style={guideNum === 2 ? styles.activeItem : styles.item}
            ></View>
            <View
              style={guideNum === 3 ? styles.activeItem : styles.item}
            ></View>
            <View
              style={guideNum === 4 ? styles.activeItem : styles.item}
            ></View>
          </View>

          {guideNum === 1 && (
            <View style={styles.textsContainer}>
              <Text style={styles.title}>Video to Unlcok Discounts</Text>
              <Text style={styles.subtitle}>
                Watch a 2 minutes video daily to unlock all discounts for the
                day.
              </Text>
            </View>
          )}

          {guideNum === 2 && (
            <View style={styles.textsContainer}>
              <Text style={styles.title}>Survey Completion</Text>
              <Text style={styles.subtitle}>
                After watching the video, you are required to complete a short
                survey.
              </Text>
            </View>
          )}

          {guideNum === 3 && (
            <View style={styles.textsContainer}>
              <Text style={styles.title}>Event Details and Participation</Text>
              <Text style={styles.subtitle}>
                View event details and choose to attend or volunteer for events.
              </Text>
            </View>
          )}

          {guideNum === 4 && (
            <View style={styles.textsContainer}>
              <Text style={styles.title}>Earn and Redeem Points</Text>
              <Text style={styles.subtitle}>
                Attending events earns points redeemable for vouchers
              </Text>
            </View>
          )}

          <View style={styles.buttonsContainer}>
            {guideNum < 4 && (
              <CustomButton
                title="Next"
                containerStyles="green"
                handlePress={() => setGuide()}
              />
            )}

            {guideNum < 4 && (
              <CustomButton
                title="Skip"
                containerStles="white"
                handlePress={() => router.push("/sign-in")}
              />
            )}

            {guideNum === 4 && (
              <CustomButton
                title="Sign In"
                containerStyles="green"
                handlePress={() => router.push("/sign-in")}
              />
            )}

            {guideNum === 4 && (
              <CustomButton
                title="Sign Up"
                containerStles="white"
                handlePress={() => router.push("/sign-up")}
              />
            )}
          </View>
        </View>
      </SafeAreaProvider>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    //height: height,
    width: width,
    display: "flex",
    padding: height * 0.04,
    alignItems: "center",
    gap: 60,
  },
  sejrContainer: {
    display: "flex",
  },
  stepper: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    //position: "absolute",
    //top: 540,
  },
  item: {
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    width: 30,
    height: 5,
  },
  activeItem: {
    backgroundColor: "#27A973",
    borderRadius: 15,
    width: 30,
    height: 5,
  },
  pictureStepperContainer: {
    display: "flex",
    alignItems: "center",
    gap: 28,
  },
  textsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    alignItems: "center",
    padding: 10,
    width: width * 0.85,
    //position: "absolute",
    //top: 580,
  },
  title: {
    fontSize: 23,
    fontWeight: 500,
    fontFamily: "Tommy-Regular",
  },
  subtitle: {
    textAlign: "center",
    color: "#605E5E",
    fontSize: 18,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    width: "100%",
    //position: "absolute",
    //bottom: 55,
  },
});

export default guides;
