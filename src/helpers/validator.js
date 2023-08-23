import { Dimensions, Platform } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IPHONE12_H = 844;
const IPHONE12_Max = 926;
const IPHONE12_Mini = 780;

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

class Validator {
  static isIphoneXorAbove() {
    if (Platform.OS === 'web') return false;

    return (
      Platform.OS === 'ios' &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)) ||
      ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
            (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)) ||
        (D_HEIGHT === IPHONE12_H) || (D_HEIGHT === IPHONE12_Max) || (D_HEIGHT === IPHONE12_Mini)
    );
  }
}

export { Validator };
