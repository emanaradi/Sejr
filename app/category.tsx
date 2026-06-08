import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ImageBackground } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../constants";
import { Offer, screenHeight } from "../lib/data";

const category = () => {
  const { id, category, offers, image } = useLocalSearchParams();

  let parsedOffers: Offer[] = [];

  try {
    if (typeof offers === "string") {
      parsedOffers = JSON.parse(offers);
    } else if (Array.isArray(offers)) {
      parsedOffers = JSON.parse(offers[0]);
    } else {
      parsedOffers = [];
    }
  } catch (error) {
    console.log("JSON Parse Error:", error);
    parsedOffers = [];
  }

  return (
    <SafeAreaView style={styles.safeArea}>
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
      <View style={styles.offersList}>
        <FlatList
          horizontal={false}
          keyExtractor={(item) => item.id.toString()}
          data={parsedOffers}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ImageBackground source={item.image} style={styles.offer}>
                <Text style={styles.offerText}>{item.store}</Text>
                <Text style={styles.offerText}>{item.offer}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default category;

const styles = StyleSheet.create({
  safeArea: {
    display: "flex",
    gap: 10,
  },
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
  offersList: {
    padding: 25,
    display: "flex",
    gap: 10,
  },
  offer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
    alignItems: "flex-end",
    height: screenHeight * 0.14,
    boxShadow: "0 0 5px grey",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "space-around",
  },
  offerText: {
    fontFamily: "Tommy-Bold",
    color: "white",
    fontWeight: "700",
    padding: 15,
  },
});
