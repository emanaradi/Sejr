import { router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsItem from "../../components/DetailsItem";
import EditButton from "../../components/EditButton";
import { icons, images } from "../../constants";
import { height, width } from "../../lib/data";

const profile = () => {
  const [editing, setEditing] = useState(false);

  return (
    <ImageBackground
      source={images.gradientbg}
      resizeMode="cover"
      style={{ width: width, height: height }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.nameContainer}>
            <Text style={[styles.whiteText, styles.bold]}>Profile</Text>

            <View style={styles.nameEmailContainer}>
              <View style={styles.circle}>
                <Text style={{ fontSize: 30, fontWeight: 600 }}>E</Text>
              </View>

              <View style={{ padding: 40, gap: 5 }}>
                <Text style={[styles.whiteText, styles.bold]}>
                  Eman Alaradi
                </Text>
                <Text style={styles.whiteText}>aradieman@gmail.com</Text>
              </View>
            </View>
          </View>

          <View style={styles.accountDetails}>
            <View style={styles.whiteContainer}>
              <View style={[styles.displayRow, styles.spaceBetween]}>
                <Text style={{ color: "#A09D9D", fontSize: 17 }}>
                  Account Details
                </Text>

                <EditButton
                  editing={editing}
                  handlePress={() => setEditing(!editing)}
                />
              </View>
              <View style={styles.detailsContainer}>
                <DetailsItem
                  label="Full Name"
                  value="Eman Alaradi"
                  icon={icons.profilePerson}
                  editing={editing}
                />

                <DetailsItem
                  label="Email"
                  value="aradieman@gmail.com"
                  icon={icons.profileEmail}
                  editing={editing}
                />

                <DetailsItem
                  label="Date of Birth"
                  value="02-02-2001"
                  icon={icons.profileCalender}
                  editing={editing}
                />

                <DetailsItem
                  label="Password"
                  value="eman@123"
                  icon={icons.profileLock}
                  editing={editing}
                />
              </View>

              <View style={styles.detailsContainer}>
                <DetailsItem
                  label="Rewards"
                  value={`100` + ` ` + `pts`}
                  icon={icons.profileRewards}
                  editing={false}
                />

                <DetailsItem
                  label="Voucher"
                  value="1"
                  icon={icons.profileVoucher}
                  editing={false}
                />
              </View>
              <TouchableOpacity onPress={() => router.push("/sign-in")}>
                <Text style={styles.signOut}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signOut: {
    color: "#048780",
    textAlign: "right",
    fontWeight: 500,
    fontSize: 17,
    paddingRight: 14,
  },
  detailsContainer: {
    borderColor: "#D8D6D6",
    borderWidth: 2,
    backgroundColor: "#EEEDED",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 5,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bold: {
    fontFamily: "Tommy-Regular",
    fontSize: 18,
  },
  container: {
    display: "flex",
  },
  nameContainer: {
    padding: 50,
    display: "flex",
    gap: 20,
    paddingBottom: 20,
  },
  circle: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#E4E4E4",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  accountDetails: {
    display: "flex",
    flexDirection: "row-reverse",
    height: height,
  },
  whiteContainer: {
    backgroundColor: "#ffffff",
    gap: 30,
    width: width,
    padding: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  whiteText: {
    color: "#ffffff",
    fontSize: 17,
    fontFamily: "Tommy-Light",
  },
  nameEmailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default profile;
