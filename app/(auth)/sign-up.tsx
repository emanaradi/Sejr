import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { CustomButton, CustomInput } from "../../components";
import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const signUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    DoB: new Date(),
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    router.push("/home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle="default"
            showHideTransition="fade"
            hidden={true}
          />
          <ScrollView>
            <View style={styles.bigTitlesConatiner}>
              <Text style={styles.bigTitle}>Create an </Text>
              <Text style={styles.bigTitle}>Account</Text>
            </View>

            <View style={styles.formContainer}>
              <View>
                <Text style={styles.welcomeTitle}>Welcome To</Text>
                <Text style={styles.sejr}>Sejr!</Text>
              </View>

              <View style={styles.inputsContainer}>
                <CustomInput
                  title="Name"
                  placeholder="Enter your full name"
                  KeyboardType="Text"
                  icon="person"
                  handleChangeText={(e: any) => {
                    setForm({ ...form, name: e });
                  }}
                />

                <CustomInput
                  title="Date"
                  placeholder="Enter your date of birth"
                  KeyboardType="Date"
                  icon="calender"
                  handleChangeText={(e: any) => {
                    setForm({ ...form, DoB: e });
                  }}
                />

                <CustomInput
                  title="Email"
                  placeholder="Enter your email"
                  KeyboardType="email-address"
                  icon="email"
                  handleChangeText={(e: any) => {
                    setForm({ ...form, email: e });
                  }}
                />

                <CustomInput
                  title="password"
                  placeholder="Enter your password"
                  KeyboardType="password"
                  icon="lock"
                  handleChangeText={(e: any) => {
                    setForm({ ...form, password: e });
                  }}
                />

                <CustomInput
                  title="password"
                  placeholder="Enter your password"
                  KeyboardType="password"
                  icon="lock"
                  handleChangeText={(e: any) => {
                    setForm({ ...form, confirmPassword: e });
                  }}
                />
              </View>

              <CustomButton
                containerStyles="green"
                title="Sign Up"
                handlePress={submit}
                isLoading={isSubmitting}
              />

              <View style={styles.orContainer}>
                <View style={styles.longLine}></View>
                <Text style={styles.or}>Or</Text>
                <View style={styles.longLine}></View>
              </View>

              <View style={styles.signUpContainer}>
                <Text style={styles.question}>Already have an account? </Text>

                <TouchableOpacity
                  onPress={() => router.push("/sign-in")}
                  activeOpacity={0.7}
                >
                  <Text style={styles.signUp}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#048780",
    height: height,
  },
  bigTitlesConatiner: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 80,
    paddingLeft: 50,
    gap: 10,
  },
  bigTitle: {
    fontFamily: "Tommy-Regular",
    color: "#ffff",
    fontSize: 40,
  },
  formContainer: {
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#ffff",
    height: height,
    width: width,
    padding: 50,
    display: "flex",
    flexDirection: "column",
    gap: 55,
    marginTop: 40,
  },
  welcomeTitle: {
    fontFamily: "Tommy-Regular",
    fontSize: 38,
    color: "#3F4E4F",
  },
  sejr: {
    color: "#048780",
    fontSize: 38,
    fontFamily: "Tommy-Regular",
    fontWeight: 500,
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  longLine: {
    borderColor: "#B6B6B6",
    borderWidth: 0.5,
    height: 1,
    width: width * 0.3,
  },
  orContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  or: {
    color: "#B6B6B6",
    backgroundColor: "#ffff",
    padding: 20,
    fontSize: 20,
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 7,
  },
  question: {
    color: "#4F4F4F",
    fontSize: 16,
    fontFamily: "Tommy-Light",
  },
  signUp: {
    color: "#048780",
    fontSize: 16,
    fontFamily: "Tommy-Regular",
  },
});

export default signUp;
