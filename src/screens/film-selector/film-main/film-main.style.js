import { StyleSheet, Dimensions, Platform } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

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

  itemContainer: {
    flexDirection: "row",
    paddingLeft: 25,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemTitle: {
    flex: 1,
    fontSize: wp(18),
    color: COLOR.PRIMARY_TEXT_COLOR,
    fontWeight: "bold",
  },
  itemIcon: {
    marginRight: 15,
    width: 12,
    height: 12,
    resizeMode: "contain",
    tintColor: COLOR.PRIMARY_TEXT_COLOR,
  },

  contentContainer: {
    flex: 1,
  },
  webView: {
    width: width,
  }
});