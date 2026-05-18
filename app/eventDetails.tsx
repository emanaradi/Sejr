import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Stack, router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { icons } from "../constants";
import { screenHeight, screenWidth } from "../lib/data";

const event = () => {
  const { id, title, describtion, date, location, image, participants } =
    useLocalSearchParams();

  const [modalVisible, setModalVisible] = useState(false);
  const [pressedButton, setPressedButton] = useState("");
  const participantsNum = Number(participants ?? 0);
  const maxVisible = 4;
  const visible = Math.min(participantsNum, maxVisible);
  const remaining = participantsNum - visible;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            !modalVisible;
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
              <Text style={[styles.textFont, { textAlign: "center" }]}>
                {pressedButton == "volunteer"
                  ? `Thank you for volunteering! You have been registered for this event as a volunteer.`
                  : `You have been registered for this event as an attendee. Thank you.`}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={styles.closeButton}
              >
                <Text style={[styles.textFont, { color: "white" }]}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.topSection}>
          <Stack.Screen options={{ headerShown: false }} />

          {image && <Image source={Number(image)} style={styles.eventImage} />}
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => {
              router.back();
            }}
          >
            <Image source={icons.backicon} style={styles.backIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSection}>
          <Text style={[styles.textFont, styles.eventTitle]}>{title}</Text>

          <View style={styles.locationDateContainer}>
            <View style={styles.locationCalendarContainer}>
              <Image
                style={styles.locationCalendarIcon}
                source={icons.location}
              />
              <Text style={[styles.textLocation, styles.textFont]}>
                {location}
              </Text>
            </View>

            <View style={styles.locationCalendarContainer}>
              <Image
                style={styles.locationCalendarIcon}
                source={icons.calendergrey}
              />
              <Text style={[styles.textLocation, styles.textFont]}>{date}</Text>
            </View>
          </View>

          <View style={styles.participantsContainer}>
            <View style={styles.participantsInnerVerticalContainer}>
              <Text style={[styles.textFont]}>Participants</Text>
              {/* Avatars */}
              <View style={styles.avatars}>
                {Array.from({ length: visible }).map((_, index) => (
                  <Image
                    key={index}
                    source={icons.person}
                    style={[
                      styles.personsImage,
                      { marginLeft: index == 0 ? 0 : -12 },
                    ]}
                  />
                ))}
                {remaining > 0 && (
                  <View
                    style={[styles.avatar, styles.more, { marginLeft: -12 }]}
                  >
                    <Text style={[styles.moreText, styles.textFont]}>
                      +{remaining}
                    </Text>
                  </View>
                )}
              </View>
              {/* End of Avatars */}
            </View>
            <TouchableOpacity>
              <FontAwesome5 name="share" size={24} color="#349d95" solid />
            </TouchableOpacity>
          </View>

          <View style={styles.eventDescriptionContainer}>
            <Text style={[styles.textFont, styles.aboutEventText]}>
              About Event
            </Text>
            <Text style={[styles.textFont, styles.eventDescription]}>
              {describtion}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPressedButton("volunteer");
                setModalVisible(true);
              }}
            >
              <Text style={[styles.textFont, styles.buttonText]}>
                Volunteer
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "white",
                  borderColor: "#C8C8C8",
                  borderWidth: 2,
                },
              ]}
              onPress={() => {
                setModalVisible(true);
                setPressedButton("attend");
              }}
            >
              <Text
                style={[
                  styles.textFont,
                  styles.buttonText,
                  { color: "#5D5D5D" },
                ]}
              >
                Attend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    </ScrollView>
  );
};

export default event;

const styles = StyleSheet.create({
  modalContainer: {
    width: screenWidth * 0.7,
    height: screenWidth * 0.4,
    backgroundColor: "white",
    boxShadow: "0px 0px 40px #949292",
    borderRadius: 20,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  closeButton: {
    backgroundColor: "#0f766e",
    borderRadius: 10,
    padding: 7,
    alignItems: "center",
  },
  centeredView: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#404040af",
  },
  eventImage: {
    width: "100%",
    height: "100%",
  },
  backIconContainer: {
    position: "absolute",
    top: 25,
    left: 25,
    zIndex: 10,
  },
  backIcon: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  topSection: {
    flex: 1,
    position: "relative",
    height: screenHeight * 0.3,
  },
  bottomSection: {
    boxShadow: "0px 0px 40px #0a0a0a",
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 28,
    gap: 25,
    marginTop: -40,
  },
  textFont: {
    fontFamily: "Tommy-Light",
  },
  eventTitle: {
    fontWeight: "400",
    fontFamily: "Tommy-Bold",
    fontSize: 23,
    color: "#03013B",
  },
  locationCalendarContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  textLocation: {
    color: "#696868",
  },
  locationCalendarIcon: {
    width: screenWidth * 0.05,
    height: screenWidth * 0.05,
  },
  locationDateContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  participantsContainer: {
    borderColor: "#B5B5B5",
    borderWidth: 2,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: screenHeight * 0.1,
    padding: 19,
    alignContent: "center",
  },
  participantsInnerVerticalContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  avatars: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "white",
    resizeMode: "cover",
    overflow: "hidden",
  },
  more: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f766e",
  },
  moreText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  personsImage: {
    borderWidth: 2,
    borderColor: "#B5B2B2",
    borderRadius: 50,
    resizeMode: "cover",
    width: 30,
    height: 30,
    backgroundColor: "white",
  },
  shareIcon: {
    width: 34,
    height: 34,
    alignSelf: "center",
  },
  aboutEventText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333333",
  },
  eventDescription: {
    color: "#636262",
    fontSize: 16,
  },
  eventDescriptionContainer: {
    display: "flex",
    gap: 10,
  },
  button: {
    backgroundColor: "#0f766e",
    padding: 13,
    borderRadius: 10,
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    gap: 7,
  },
});
