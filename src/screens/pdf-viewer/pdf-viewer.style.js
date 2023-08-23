import { StyleSheet, Dimensions, Platform } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from "@config";

export const { width } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLOR.PRIMARY_COLOR,
    },
    headerContainer: {
        height: 50,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    backIcon: {
        width: 25,
        height: 25,
        resizeMode: "contain"
    },
    title: {
        color: "white",
        fontSize: wp(18),
        fontWeight: "bold",
        marginLeft: 5,
        flex: 1,
    },
    shareButton: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    shareIcon: {
        width: 40,
        height: 40,
        tintColor: "white",
        resizeMode: "contain"
    },
    pdf: {
        flex: 1,
        backgroundColor: COLOR.SECONDARY_COLOR
    }
});