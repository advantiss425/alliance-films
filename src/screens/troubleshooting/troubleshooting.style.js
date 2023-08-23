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

  carouselContainer: {
    flex: 1,
    marginVertical: wp(45),
  },
  slide: {
    flex: 1,
    borderBottomLeftRadius: wp(15),
    borderTopRightRadius: wp(15),
    overflow: "hidden",
  },
  slideImage: {
    flex: 1,
    backgroundColor: COLOR.SECONDARY_COLOR,
  },
  questionText: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: wp(20),
    paddingHorizontal: wp(20),
    textAlign: "center",
    fontWeight: "bold",
    fontSize: wp(16),
    color: '#fff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#000',
  },
  solutionContainer: {
    backgroundColor: "rgba(0, 25, 112, 0.7)"
  },
  solutionTitle: {
    marginTop: wp(30),
    textAlign: "center",
    fontWeight: "bold",
    fontSize: wp(16),
    color: '#fff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#000',
  },
  solutionTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(10),
  },
  solutionText: {
    textAlign: "center",
    fontSize: wp(14),
    lineHeight: wp(18),
    color: '#fff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#000',
  },

  prevButton: {
    position: "absolute",
    top: "48%",
    left: width / 6 - wp(15),
    width: wp(30),
    height: wp(30),
    borderRadius: wp(20),
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    position: "absolute",
    top: "48%",
    right: width / 6 - wp(15),
    width: wp(30),
    height: wp(30),
    borderRadius: wp(20),
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: wp(16),
  }
});