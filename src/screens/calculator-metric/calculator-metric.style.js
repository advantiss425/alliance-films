import { StyleSheet, Dimensions, Platform } from "react-native";
import { widthPercentageToDP as wp, FontHelper } from "@helpers";
import { COLOR } from "@config";

export const { width } = Dimensions.get("window");

export default StyleSheet.create({
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
    marginHorizontal: wp(15),
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: wp(20),
  },
  mainIcon: {
    width: wp(35),
    height: wp(35),
    tintColor: COLOR.PRIMARY_TEXT_COLOR,
  },
  mainTitleText: {
    color: COLOR.PRIMARY_TEXT_COLOR,
    fontSize: wp(18),
    fontWeight: "bold",
    marginLeft: wp(15),
  },
  
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: wp(15),
  },
  valueLeftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  valueTitleText: {
    flex: 1,
    color: COLOR.PRIMARY_TEXT_COLOR,
    fontSize: wp(15),
    fontWeight: "bold",
  },
  valueInput: FontHelper.font({
    width: wp(100),
    height: wp(30),
    borderWidth: 1,
    borderRadius: wp(15),
    borderColor: COLOR.PRIMARY_BORDER_COLOR,
    color: COLOR.PRIMARY_INPUT_COLOR,
    paddingHorizontal: wp(10),
    paddingVertical: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: wp(15),
  }),
  valueUnitText: {
    color: COLOR.PRIMARY_INPUT_COLOR,
    fontSize: wp(13),
    fontWeight: "bold",
    textAlign: "right"
  },
  valueUnitRightText: {
    width: wp(60),
    color: COLOR.PRIMARY_INPUT_COLOR,
    fontSize: wp(13),
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: wp(20),
  },
  buttonContainer: {
    width: wp(125),
    height: wp(35),
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: wp(14),
    fontWeight: "bold",
  },
  resetButton: {
    width: wp(30),
    height: wp(30),
    tintColor: COLOR.PRIMARY_COLOR
  },
});