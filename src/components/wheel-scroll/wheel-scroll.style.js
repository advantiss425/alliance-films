import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";

export default StyleSheet.create({
  container: {
    overflow: "hidden",
    alignItems: "center",
  },

  topGradientBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50%",
    opacity: 0.1,
  },

  bottomGradientBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    opacity: 0.1,
  },

  highlightView: {
    position: "absolute",
    borderTopWidth: wp(1),
    borderBottomWidth: wp(1),
    height: wp(45),
  },

  selectedItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  itemIcon: {
    height: wp(25),
    width: wp(25),
  },

  scrollViewContainer: {
    flex: 1,
    width: "100%",
    marginVertical: wp(20),
  },
  scrollContainer: {
    width: "100%",
    flex: 1,
  },

  flexFill: {
    flex: 1,
  },
});
