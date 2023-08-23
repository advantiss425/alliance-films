import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";

export default StyleSheet.create({

  container: {
    flex: 1,
    borderTopRightRadius: 50,
    paddingTop: wp(25),
    paddingHorizontal: wp(25),
    justifyContent: "center",
  },

  seperator: {
    flex: 1,
    height: wp(1),
    marginVertical: wp(15),
  },
  
  mainMenu: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  mainMenuIcon: {
    width: wp(30),
    height: wp(30),
    tintColor: "white",
  },
  mainMenuText: {
    marginLeft: wp(10),
    fontWeight: "bold",
    fontSize: wp(18),
    color: '#fff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#000',
  },

  subMenuContainer: {
    marginLeft: wp(35),
  },
  subMenu: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  subMenuIcon: {
    width: wp(25),
    height: wp(25),
    tintColor: "white",
    marginLeft: Platform.OS === "ios" ? wp(8) : wp(30),
  },
  subMenuText: {
    flex: 1,
    marginLeft: wp(10),
    fontWeight: "400",
    fontSize: wp(14),
    color: '#fff',
  },

  bottomSpacer: {
    height: wp(50),
  }
});