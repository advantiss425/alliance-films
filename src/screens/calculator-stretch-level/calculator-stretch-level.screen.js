import React, { useState } from 'react';
import { 
  Image, SafeAreaView, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientButton, Text } from "@components";
import { COLOR } from "@config";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './calculator-stretch-level.style';

const CalculatorStretchLevelScreen: () => React$Node = (props) => {
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [rotation, setRotation] = useState("");
  const [thickness, setThickness] = useState("");
  const [filmWidth, setFilmWidth] = useState("");
  const [cutweigh, setCutWeigh] = useState("");
  const [distance, setDistance] = useState("");
  const [resultA, setResultA] = useState("");
  const [resultB, setResultB] = useState("");

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
    let loadwidth1 = parseFloat(validateValue(width));
    let loadwidth2 = parseFloat(validateValue(depth));
    let numberotation = parseFloat(validateValue(rotation));
    let orginalwidth = parseFloat(validateValue(filmWidth));
    let orginalthickness = parseFloat(validateValue(thickness));
    let resultcut = parseFloat(validateValue(cutweigh));
    let nDistance = parseFloat(validateValue(distance));

    let multiply1 = (loadwidth1 + loadwidth2) * numberotation * 0.16666666666666666 * 4.0E-4 * 16.0 * orginalwidth * orginalthickness;
    let multiply2 = multiply1 - resultcut;
    let multiply3 = multiply2 / resultcut;

    let strperstrech = multiply3 * 100.0;

    setResultA(strperstrech.toFixed(0));

    let multiply7 = (nDistance / 10.0) - 1.0;
    setResultB((multiply7 * 100.0).toFixed(0));
  }

  const onReset = () => {
    setWidth("");
    setDepth("");
    setRotation("");
    setThickness("");
    setFilmWidth("");
    setCutWeigh("");
    setDistance("");

    setResultA("");
    setResultB("");
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

          <KeyboardAvoidingView style={styles.contentContainer}  behavior={Platform.OS === "ios" ? "padding" : ""}>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.mainContainer}>
                <Image source={require("@images/stretch.png")} style={styles.mainIcon} />
                <Text style={styles.mainTitleText}>STRETCH LEVEL</Text>
              </View>

              <Text style={styles.subHeader}>Based on Film Weight (Cut-and-Weigh):</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Load Width</Text>
                <TextInput
                  value={`${width}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setWidth(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>inches</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Load Depth</Text>
                <TextInput
                  value={`${depth}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setDepth(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>inches</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Number of Rotations</Text>
                <TextInput
                  value={`${rotation}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setRotation(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Original Thickness</Text>
                <TextInput
                  value={`${thickness}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setThickness(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>gauge</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Film Width</Text>
                <TextInput
                  value={`${filmWidth}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setFilmWidth(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>inches</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Result of cut and weigh</Text>
                <TextInput
                  value={`${cutweigh}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setCutWeigh(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>oz</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Percent Stretch</Text>
                <TextInput
                  value={`${resultA}`}
                  style={styles.valueInput}
                  editable={false} />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <Text style={styles.subHeader}>Stretch Based on Length Change(marking wheel):</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Distance between marks on load</Text>
                <TextInput
                  value={`${distance}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setDistance(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>inches</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Percent Stretch</Text>
                <TextInput
                  value={`${resultB}`}
                  style={styles.valueInput}
                  editable={false} />
                <Text style={styles.valueUnitText}></Text>
              </View>
            </ScrollView>
            
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

export default CalculatorStretchLevelScreen;