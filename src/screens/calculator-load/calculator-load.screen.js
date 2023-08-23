import React, { useState } from 'react';
import { 
  Image, SafeAreaView, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientButton, Text } from "@components";
import { COLOR } from "@config";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './calculator-load.style';

const CalculatorLoadScreen: () => React$Node = (props) => {
  const [weight, setWeight] = useState("");
  const [pound, setPound] = useState("");
  const [result, setResult] = useState("");

  const [weightB, setWeightB] = useState("");
  const [poundB, setPoundB] = useState("");
  const [resultB, setResultB] = useState("");
  const [resultS, setResultS] = useState("");
  const [resultP, setResultP] = useState("");

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
    let nWeight = parseFloat(validateValue(weight));
    let nPound = parseFloat(validateValue(pound));

    setResult((nWeight * nPound / 16.0).toFixed(2));

    let nWeightB = parseFloat(validateValue(weightB));
    let nPoundB = parseFloat(validateValue(poundB));

    setResultB((nWeightB * nPoundB / 16.0).toFixed(2));

    setResultS(((nWeightB * nPoundB / 16.0) - (nWeight * nPound / 16.0)).toFixed(2));
    setResultP((((nWeightB * nPoundB / 16.0) - (nWeight * nPound / 16.0)) / (nWeightB * nPoundB / 16.0) * 100).toFixed(2));
  }

  const onReset = () => {
    setWeight("");
    setPound("");
    setResult("");

    setWeightB("");
    setPoundB("");
    setResultB("");
    setResultS("");
    setResultP("");
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

          <KeyboardAvoidingView style={styles.contentContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.mainContainer}>
                <Image source={require("@images/ic_bank.png")} style={styles.mainIcon} />
                <Text style={styles.mainTitleText}>LOAD PRICE</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Weight per Load w/A</Text>
                <TextInput
                  value={`${weight}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setWeight(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>Ounces</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Cost per pound of A</Text>
                <TextInput
                  value={`${pound}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setPound(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Cost per Load of A</Text>
                <TextInput
                  value={`${result}`}
                  style={styles.valueInput}
                  editable={false} />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Weight per Load w/B</Text>
                <TextInput
                  value={`${weightB}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setWeightB(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>Ounces</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Cost per pound of B</Text>
                <TextInput
                  value={`${poundB}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setPoundB(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Cost per Load of B</Text>
                <TextInput
                  value={`${resultB}`}
                  style={styles.valueInput}
                  editable={false} />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Savings from A to B</Text>
                <TextInput
                  value={`${resultS}`}
                  style={styles.valueInput}
                  editable={false} />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Percentage of Savings</Text>
                <TextInput
                  value={`${resultP}`}
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

export default CalculatorLoadScreen;