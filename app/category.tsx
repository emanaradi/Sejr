import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { Offer } from "../lib/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../lib/data";
import { icons } from "../constants";

const category = () => {
  const { id, category, offers, image } = useLocalSearchParams();

  let parsedOffers: Offer[] = [];

  try {
    const offersString = Array.isArray(offers) ? offers[0] : offers;
    parsedOffers = offersString ? JSON.parse(offersString) : [];
  } catch {
    parsedOffers = [];
  }

  return (
    <ScrollView>
      <SafeAreaView style={{ display: "flex", gap: 20 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              router.push("/home");
            }}
          >
            <Image style={styles.backicon} source={icons.backicon} />
          </TouchableOpacity>
          <Text style={[styles.font, { fontSize: 18, fontWeight: "bold" }]}>
            {category}
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default category;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
    padding: 50,
    alignItems: "center",
  },
  font: {
    fontFamily: "Tommy-Light",
    color: "#03013B",
  },
  backicon: {
    width: 40,
    height: 40,
  },
  listCont: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
});
