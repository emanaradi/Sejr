import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActivityItem from "../../components/ActivityItem";
import CategoryItem from "../../components/CategoryItem";
import EventItem from "../../components/EventItem";
import { images } from "../../constants";
import { activities, categories, events } from "../../lib/data";

const home = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="default"
          showHideTransition="fade"
          hidden={true}
        />
        <View style={styles.circle}></View>

        <View style={styles.titleandPoints}>
          <View>
            <Image source={images.sejr} resizeMode="contain" />
          </View>

          <View style={styles.pointsContainer}>
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 10,
                color: "#048780",
              }}
            >
              100 pts
            </Text>
            <View style={styles.circleBorder}>
              <Text
                style={{
                  color: "#048780",
                  fontFamily: "Tommy-Regular",
                  fontSize: 18,
                }}
              >
                E
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.welcomeMessage}>
          <Text style={styles.name}>Hello, Eman!</Text>
        </View>

        <TouchableOpacity onPress={() => router.push("/watch")}>
          <View
            style={{
              paddingTop: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image source={images.unlockDeals} resizeMode="stretch" />
          </View>
        </TouchableOpacity>

        <View style={styles.section}>
          <View style={styles.activitiesHeading}>
            <Text style={styles.heading}> Activities</Text>
            <Pressable onPress={() => router.push("/activitiesList")}>
              <Text style={styles.seeAll}>See All</Text>
            </Pressable>
          </View>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={activities.slice(0, 3)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ActivityItem
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                margin={true}
              />
            )}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Category</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/category",
                    params: {
                      id: item.id,
                      category: item.category,
                      offers: JSON.stringify(item.offers),
                      image: item.image,
                    },
                  })
                }
              >
                <CategoryItem image={item.image} name={item.category} />
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Events</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={events.slice(0, 3)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  router.push({
                    pathname: "/eventDetails",
                    params: {
                      id: item.id,
                      title: item.name,
                      describtion: item.description,
                      date: item.date,
                      location: item.location,
                      participants: item.participants,
                      image: item.image,
                    },
                  });
                }}
              >
                <EventItem
                  image={item.image}
                  name={item.name}
                  location={item.location}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F2F2F2",
    paddingTop: 100,
    display: "flex",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#303C90",
    width: 390,
    height: 390,
    position: "absolute",
    top: -180,
    right: -190,
    borderRadius: 300,
  },
  titleandPoints: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 25,
    paddingLeft: 25,
  },
  pointsContainer: {
    backgroundColor: "#ffff",
    borderRadius: 50,
    width: 120,
    height: 50,
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "2px 2px 10px rgba(74, 74, 74, 0.74)",
    paddingRight: 4,
  },
  circleBorder: {
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeMessage: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 25,
    paddingRight: 25,
  },
  name: {
    fontFamily: "Tommy-Regular",
    fontSize: 33,
    marginTop: 60,
    color: "#3F4E4F",
    textAlign: "left",
  },
  heading: {
    fontFamily: "Tommy-Regular",
    fontSize: 22,
    paddingTop: 20,
    paddingBottom: 20,
  },
  activitiesHeading: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeAll: {
    color: "#048780",
    fontFamily: "Tommy-Light",
    paddingRight: 25,
  },
  section: {
    paddingLeft: 25,
  },
});

export default home;
