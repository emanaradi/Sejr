import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { alertss, width } from "../../lib/data";
import AlertItem from "@/components/AlertItem";

const alerts = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Alerts</Text>
        </View>

        <FlatList
          horizontal={false}
          data={alertss}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AlertItem
              image={item.image}
              description={item.description}
              store={item.store}
            />
          )}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default alerts;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 104,
    boxShadow: "0 2px 7px rgba(138, 137, 137, 0.39)",
  },
  headerText: {
    fontFamily: "Tommy-Regular",
    fontSize: 20,
    color: "#404040",
    paddingTop: 28,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
