import { StyleSheet, Dimensions, Platform } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from "@config";

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

  videoList: {
    flex: 1,
    marginTop: wp(10),
  },
  contentContainer: {
    paddingBottom: wp(20),
  },
  listItemContainer: {
    flexDirection: "row",
    marginHorizontal: wp(30),
    marginTop: wp(15)
  },
  itemImageContainer: {
    width: wp(120),
    height: wp(80),
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: wp(10),
  },
  itemPlayIcon: {
    width: wp(35),
    height: wp(35),
    position: "absolute",
    tintColor: "white",
  },
  itemText: {
    flex: 1,
    marginLeft: wp(15),
    alignSelf: "center",
    color: COLOR.PRIMARY_TEXT_COLOR,
    fontSize: wp(16),
    fontWeight: "bold",
  },

  playerModal: {
    flex: 1,
    backgroundColor: "black",
  },
  playerContainer: {
    flex: 1,
  },
});