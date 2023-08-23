import React, { useState } from 'react';
import { 
  Image, SafeAreaView, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientButton, Text } from "@components";
import { COLOR } from "@config";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './calculator-weight.style';

const CalculatorWeightScreen: () => React$Node = (props) => {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [thickness, setThickness] = useState("");
  const [rollWeight, setRollWeight] = useState("");

  const insets = useSafeAreaInsets();
  let isPhoneX = Validator.isIphoneXorAbove();
  let headerImage = isPhoneX ? require('@images/calculator-header-x.png') : require('@images/calculator-header.png');

  let contentPaddingTop = screenWidth / 879 * 465 - insets.top;
  if (isPhoneX) {
    contentPaddingTop = screenWidth / 879 * 515 - insets.top;
  }

  const validateValue = (value) => {
    if (value === "") {
      return "0.0";
    }
    return value;
  }

  const onCalc = () => {
    let nWidth = parseFloat(validateValue(width));
    let nLength = parseFloat(validateValue(length));
    let nThickness = parseFloat(validateValue(thickness));

    setRollWeight((((nLength * nWidth) * nThickness) / 250000.0).toFixed(2));
  }

  const onReset = () => {
    setWidth("");
    setLength("");
    setThickness("");
    setRollWeight("");
  }

  return (
    <View style={styles.rootContainer}>

      <Image source={headerImage} style={isPhoneX ? styles.logoX : styles.logo} resizeMode={"cover"} />

      <SafeAreaView style={styles.absoluteFill}>        
        <View
          style={[styles.flexFill, {paddingTop: contentPaddingTop}]}>
            
          <TouchableOpacity 
            style={[styles.hamburgButton, isPhoneX && styles.hamburgButtonX]}
            onPress={() => props.navigation.openDrawer()} />

          <KeyboardAvoidingView style={styles.contentContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>

            <View style={styles.mainContainer}>
              <Image source={require("@images/ic_balance.png")} style={styles.mainIcon} />
              <Text style={styles.mainTitleText}>WEIGHT PER ROLL</Text>
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueTitleText}>Width</Text>
              <TextInput
                value={`${width}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setWidth(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueTitleText}>Length</Text>
              <TextInput
                value={`${length}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setLength(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueTitleText}>Thickness</Text>
              <TextInput
                value={`${thickness}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setThickness(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueTitleText}>Roll Weight</Text>
              <TextInput
                value={`${rollWeight}`}
                style={styles.valueInput}
                editable={false} />
            </View>

            <View style={styles.flexFill}>
              <Text style={styles.descText}>
              Net Poly Weight is the weight of the stretch film on a roll.  It does not include the core weight or any other packaging.  For thickness, please input the gauge of material for proper calculation.
              </Text>
            </View>
                        
            <View style={styles.buttonsContainer}>
              <TouchableOpacity activeOpacity={0.8}
                onPress={onReset}>
                <Image source={require("@images/ic_refresh.png")} style={styles.resetButton} />
              </TouchableOpacity>
              <GradientButton
                containerStyle={styles.buttonContainer}
                onPress={onCalc}>
                <Text style={styles.buttonText}>CALCULATE</Text>
              </GradientButton>
            </View>

          </KeyboardAvoidingView>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default CalculatorWeightScreen;