import { StyleSheet, Dimensions, Platform } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";

export const { width } = Dimensions.get("window");

export default StyleSheet.create({
  rootContainer: {
    flex: 1, 
    backgroundColor: "white",
  },
  flexFill: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  absoluteFill: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },

  logo: {
    width: width,
    height: width / 879 * 465,
    borderBottomLeftRadius: wp(30),
  },
  logoX: {
    width: width,
    height: width / 879 * 515,
    borderBottomLeftRadius: wp(30),
  },

  hamburgButton: {
    position: "absolute",
    width: wp(60),
    height: wp(40),
    left: wp(17),
    top: Platform.OS === "ios" ? wp(20) : wp(24),
  },
  hamburgButtonX: {
    left: wp(17),
    top: wp(5),
  },

  contentContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: wp(50),
  },
  buttonContainer: {
    height: wp(70),
  },
  rowButtonContainer: {
    height: wp(100),
    marginTop: wp(10),
  },
  buttonIcon: {
    width: wp(30),
    height: wp(30),
    tintColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: wp(14),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: wp(5),
  },
});