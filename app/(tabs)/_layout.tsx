import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";
import { View, Image, Text, StyleSheet } from "react-native";

const TabIcon = ({ icon, color, name }: any) => {
  return (
    <View style={[styles.tabContainer, name === "Profile" && styles.profile]}>
      <Image
        style={
          name === "Profile"
            ? { width: 40, height: 48 }
            : { width: 35, height: 35 }
        }
        source={icon}
        resizeMode="contain"
        tintColor={color}
      />
      <Text
        style={{
          ...(name === "Alert" && { paddingTop: 7 }),
          color: color,
          fontSize: 9,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const _layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#048780",
          tabBarInactiveTintColor: "#D9D9D9",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#ffff",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="alerts"
          options={{
            title: "Alerts",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.alert}
                color={color}
                name="Alerts"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.persony}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  profile: {
    paddingTop: 35,
  },
});

export default _layout;
