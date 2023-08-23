import React, { useState } from 'react';
import { 
  Image, SafeAreaView, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientButton, Text } from "@components";
import { COLOR } from "@config";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './calculator-roll.style';

const CalculatorRollScreen: () => React$Node = (props) => {
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [inDiameter, setInDiameter] = useState("");
  const [outDiameter, setOutDiameter] = useState("");
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

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
    let nLength = parseFloat(validateValue(length)) * 12.0;
    let nThickness = parseFloat(validateValue(thickness));
    let nInSide = parseFloat(validateValue(inDiameter)) / 2.0;
    let nOutSide = parseFloat(validateValue(outDiameter)) / 2.0;

    if (nThickness === 0 || nLength === 0 || nInSide === 0 || nOutSide === 0) {
      if (nThickness === 0) {
        if (nLength === 0 || nInSide === 0 || nOutSide === 0) {
          Alert.alert("Error", "You need to input 3 values");
          return;
        } else if (nOutSide < nInSide) {
          Alert.alert("Error", "Outside Diameter must bigger than Inside Diameter");
          return;
        } else {
          setThickness((((nOutSide * nOutSide) - (nInSide * nInSide)) * Math.PI / nLength).toFixed(2));
        }
      } else if (nLength === 0) {
        if (nThickness === 0 || nInSide === 0 || nOutSide === 0) {
          Alert.alert("Error", "You need to input 3 values");
          return;
        } else if (nOutSide < nInSide) {
          Alert.alert("Error", "Outside Diameter must bigger than Inside Diameter");
          return;
        } else {
          setLength( (((((nOutSide * nOutSide) - (nInSide * nInSide)) * Math.PI) / nThickness) / 12.0).toFixed(2) );
        }
      } else if (nInSide === 0) {
        if (nLength === 0 || nThickness === 0 || nOutSide === 0) {
          Alert.alert("Error", "You need to input 3 values");
          return;
        }
        let result = Math.sqrt((nOutSide * nOutSide) - ((nLength * nThickness) / Math.PI));
        setInDiameter((result * 2.0).toFixed(2));
      } else {
        if (nLength === 0 || nInSide === 0 || nThickness === 0) {
          Alert.alert("Error", "You need to input 3 values");
          return;
        }
        let result2 = Math.sqrt((nInSide * nInSide) + ((nLength * nThickness) / Math.PI));
        setOutDiameter((2.0 * result2).toFixed(2));
      }
    } else {
      Alert.alert("Error", "You need to input 3 values");
    }
  }

  const onReset = () => {
    setThickness("");
    setLength("");
    setInDiameter("");
    setOutDiameter("");
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
              <Image source={require("@images/ic_diameter.png")} style={styles.mainIcon} />
              <Text style={styles.mainTitleText}>ROLL DIAMETER</Text>
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
              <Text style={styles.valueUnitText}>in</Text>
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
              <Text style={styles.valueUnitText}>ft</Text>
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueTitleText}>Inside Diameter</Text>
              <TextInput
                value={`${inDiameter}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setInDiameter(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
              <Text style={styles.valueUnitText}>in</Text>
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueTitleText}>Outside Diameter</Text>
              <TextInput
                value={`${outDiameter}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setOutDiameter(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
              <Text style={styles.valueUnitText}>in</Text>
            </View>

            <View style={[styles.flexFill, {alignItems: "center", marginLeft: 60}]}
              onLayout={(e) => {
                let height = e.nativeEvent.layout.height;
                if (height > 120) height = 120;
                setImgHeight(height);
                setImgWidth(height / 455 * 650);
              }}>
              <Image source={require("@images/roll-diameter.jpg")}
                style={{ width: imgWidth, height: imgHeight }}
                resizeMode={"contain"} />
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

export default CalculatorRollScreen;