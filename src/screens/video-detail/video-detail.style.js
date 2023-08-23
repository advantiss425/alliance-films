import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "black",
  },

  flexFill: {
    flex: 1,
  },

  contentContainer: {
    flex: 1, 
    justifyContent: "center",
  },
  player: {
    // flex: 1,
    height: 300,
    backgroundColor: "black",
  },

  closeButton: {
    position: "absolute",
    left: wp(15),
    top: wp(15),
  },
  closeIcon: {
    width: wp(25),
    height: wp(35),
    resizeMode: "contain"
  },
});