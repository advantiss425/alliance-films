import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  flexFill: {
    flex: 1,
  },

  logo: {
    width: width,
    height: width / 1440 * 804,
    borderBottomLeftRadius: wp(30),
  },

  scrollContainer: {
    paddingBottom: wp(20),
  },
  buttonsContainer: {
    alignItems: "center",
  },
  button: {
    marginTop: wp(20),
  },
  buttonImage: {
    width: width - wp(70),
    height: (width - wp(70)) / 735 * 230,
    borderTopRightRadius: wp(30),
    borderBottomLeftRadius: wp(30),
  }
});