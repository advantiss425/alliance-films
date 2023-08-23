import _ from "lodash";

// use post script names for font families
const MyGothic = {
  "400": { fontFamily: "CenturyGothic" },
  "400italic": { fontFamily: "CenturyGothic-Italic" },
  bold: { fontFamily: "CenturyGothic-Bold" },
  bolditalic: { fontFamily: "CenturyGothic-BoldItalic" },
};

const FONTS = {
  MyGothic,
};

/*
  Helper class for cross-platform font styles
*/
class FontHelper {
  static font(fontParams) {
    let { fontFamily, fontWeight, fontStyle } = fontParams;
    fontFamily = fontFamily || "MyGothic";
    fontWeight = fontWeight || "400";
    fontStyle = fontStyle || "";

    const styles = {
      ..._.omit(fontParams, ["fontFamily", "fontWeight", "fontStyle"]),
      ...FONTS[fontFamily][fontWeight + fontStyle],
    };

    return styles;
  }
}

export { FontHelper };
