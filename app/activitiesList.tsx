import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivityItem from "@/components/ActivityItem";
import { activities } from "../lib/data";
import { SafeAreaView } from "react-native-safe-area-context";

const activitiesList = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.Container}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={activities}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ActivityItem
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                margin={false}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default activitiesList;

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 25,
  },
});
