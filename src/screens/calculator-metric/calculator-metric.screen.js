import React, { useState } from 'react';
import { Image, SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientButton, Text } from "@components";
import { COLOR } from "@config";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './calculator-metric.style';

const CalculatorMetricScreen: () => React$Node = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");  

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

  const onConvert = () => {
    let nValue1 = parseFloat(validateValue(value1));
    let nValue2 = parseFloat(validateValue(value2));
    let nValue3 = parseFloat(validateValue(value3));
    let nValue4 = parseFloat(validateValue(value4));
    let nValue5 = parseFloat(validateValue(value5));

    setResult1((25.4 * nValue1).toFixed(2));
    setResult2((2.54 * nValue2).toFixed(2));
    setResult3((0.304 * nValue3).toFixed(2));
    setResult4((0.453 * nValue4).toFixed(2));
    setResult5((0.25375 * nValue5).toFixed(2));
  }

  const onRevert = () => {
    let nResult1 = parseFloat(validateValue(result1));
    let nResult2 = parseFloat(validateValue(result2));
    let nResult3 = parseFloat(validateValue(result3));
    let nResult4 = parseFloat(validateValue(result4));
    let nResult5 = parseFloat(validateValue(result5));
    
    setValue1((0.03937007859349251 * nResult1).toFixed(2));
    setValue2((0.3937007784843445 * nResult2).toFixed(2));
    setValue3((3.28947377204895 * nResult3).toFixed(2));
    setValue4((2.207505464553833 * nResult4).toFixed(2));
    setValue5((3.9408867359161377 * nResult5).toFixed(2));
  }

  const onReset = () => {
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");
    setResult1("");
    setResult2("");
    setResult3("");
    setResult4("");
    setResult4("");
  }

  return (
    <View style={styles.flexFill}>

      <Image source={headerImage} style={isPhoneX ? styles.logoX : styles.logo} resizeMode={"cover"} />

      <SafeAreaView style={styles.absoluteFill}>
        <View style={[styles.flexFill, {paddingTop: contentPaddingTop}]}>

          <TouchableOpacity 
            style={[styles.hamburgButton, isPhoneX && styles.hamburgButtonX]}
            onPress={() => props.navigation.openDrawer()} />

          <View style={styles.contentContainer}>

            <View style={styles.mainContainer}>
              <Image source={require("@images/ic_conversion.png")} style={styles.mainIcon} />
              <Text style={styles.mainTitleText}>METRIC CONVERSION</Text>
            </View>

            <View style={styles.valueContainer}>
              <View style={styles.valueLeftContainer}>
                <TextInput
                  value={`${value1}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setValue1(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>{"  in   ="}</Text>
              </View>

              <TextInput
                value={`${result1}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setResult1(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
              <Text style={styles.valueUnitRightText}>{" mm"}</Text>
            </View>

            <View style={styles.valueContainer}>
              <View style={styles.valueLeftContainer}>
                <TextInput
                  value={`${value2}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setValue2(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>{"  in   ="}</Text>
              </View>

              <TextInput
                value={`${result2}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setResult2(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
              <Text style={styles.valueUnitRightText}>{" cm"}</Text>
            </View>

            <View style={styles.valueContainer}>
              <View style={styles.valueLeftContainer}>
                <TextInput
                  value={`${value3}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setValue3(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>{"  ft   ="}</Text>
              </View>

              <TextInput
                value={`${result3}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setResult3(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
              <Text style={styles.valueUnitRightText}>{" metrers"}</Text>
            </View>

            <View style={styles.valueContainer}>
              <View style={styles.valueLeftContainer}>
                <TextInput
                  value={`${value4}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setValue4(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>{"  lb   ="}</Text>
              </View>

              <TextInput
                value={`${result4}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setResult4(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
              <Text style={styles.valueUnitRightText}>{" kg"}</Text>
            </View>

            <View style={styles.valueContainer}>
              <View style={styles.valueLeftContainer}>
                <TextInput
                  value={`${value5}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setValue5(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>{"  Gauge   ="}</Text>
              </View>

              <TextInput
                value={`${result5}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setResult5(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
              <Text style={styles.valueUnitRightText}>{" micron"}</Text>
            </View>

            <View style={styles.flexFill} />
            
            <View style={styles.buttonsContainer}>
              <GradientButton
                containerStyle={styles.buttonContainer}
                onPress={onConvert}>
                <Text style={styles.buttonText}>{"CONVERT ->"}</Text>
              </GradientButton>

              <TouchableOpacity activeOpacity={0.8}
                onPress={onReset}>
                <Image source={require("@images/ic_refresh.png")} style={styles.resetButton} />
              </TouchableOpacity>

              <GradientButton
                containerStyle={styles.buttonContainer}
                onPress={onRevert}>
                <Text style={styles.buttonText}>{"<- REVERT"}</Text>
              </GradientButton>
            </View>

          </View>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default CalculatorMetricScreen;