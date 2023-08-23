import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";

export default StyleSheet.create({
  container: {
    height: wp(35),
    borderRadius: wp(15),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.25,
  },
});
