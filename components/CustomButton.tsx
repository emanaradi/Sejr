import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  isLoading,
}: any) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={[
        containerStyles == "green"
          ? styles.greenContainer
          : styles.whiteContainer,
        isLoading && styles.opacity50,
      ]}
    >
      <Text
        style={
          containerStyles == "green" ? styles.greenTheme : styles.whiteTheme
        }
      >
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator animating={isLoading} color="#0000" size="small" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  greenContainer: {
    backgroundColor: "#048780",
    borderRadius: 15,
    width: width * 0.8,
    height: height * 0.06,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  greenTheme: {
    color: "#ffff",
    fontFamily: "Tommy-Regular",
    fontSize: 22,
  },
  whiteTheme: {
    color: "#5D5D5D",
    fontFamily: "Tommy-Regular",
    fontSize: 22,
  },
  whiteContainer: {
    backgroundColor: "#ffff",
    borderRadius: 15,
    width: width * 0.8,
    height: height * 0.06,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C8C8C8",
  },
  opacity50: {
    opacity: 50,
  },
});

export default CustomButton;
