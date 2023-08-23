import { StyleSheet, Dimensions, Platform } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

export const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(15),
  },
  backButton: {
    marginRight: 5,
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: COLOR.PRIMARY_TEXT_COLOR,
  },
  title: {
    marginLeft: 10,
    marginVertical: 8,
    fontSize: wp(20),
    color: COLOR.PRIMARY_TEXT_COLOR,
    fontWeight: "bold",
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
    fontSize: wp(16),
    color: COLOR.PRIMARY_TEXT_COLOR,
  },
  itemIcon: {
    marginRight: 15,
    width: 12,
    height: 12,
    resizeMode: "contain",
    tintColor: COLOR.PRIMARY_TEXT_COLOR,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    marginHorizontal: wp(30),
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  backdrop: {
    ...StyleSheet.absoluteFill
  },
  modalTitle: {
    fontSize: wp(22),
    fontWeight: "bold",
    paddingTop: wp(20),
    paddingBottom: wp(5),
    color: COLOR.PRIMARY_TEXT_COLOR,
  },
  modalItemContainer: {
    width: '100%',
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  modalText1: {
    color: "white",
    textAlign: "center",
    paddingTop: wp(14),
    fontSize: wp(16),
  },
  modalText2: {
    color: "white",
    textAlign: "center",
    paddingTop: wp(8),
    fontSize: wp(20),
    fontWeight: "bold",
  },
  modalText3: {
    color: "white",
    textAlign: "center",
    paddingVertical: wp(8),
    fontSize: wp(16),
  }
});