import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import images from "../constants/images.js";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Index() {
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     router.push("/guides");
  //   }, 8000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <TouchableOpacity onPress={() => router.push("/guides")}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="default"
        showHideTransition="fade"
        hidden={true}
      />
      <Image source={images.splashCustom} style={styles.splash} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  splash: {
    width: width,
    height: height,
  },
});
