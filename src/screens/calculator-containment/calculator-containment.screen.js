import React, { useState } from 'react';
import { 
  Image, SafeAreaView, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Platform
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientButton, Text } from "@components";
import { COLOR } from "@config";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './calculator-containment.style';

const CalculatorContainmentScreen: () => React$Node = (props) => {
  const [weight, setWeight] = useState("");
  const [openStack, setOpenStack] = useState(false);
  const [stackValue, setStackValue] = useState("Column");
  const [items, setItems] = useState([
    {label: 'Column', value: 'Column'},
    {label: 'Interlocked', value: 'Interlocked'}
  ]);
  const [openDistribution, setOpenDistribution] = useState(false);
  const [distribution, setDistribution] = useState("TL");
  const [distributions, setDistributions] = useState([
    {label: 'TL', value: 'TL'},
    {label: 'LTL Film', value: 'LTL Film'}
  ]);
  const [openSolid, setOpenSolid] = useState(false);
  const [solid, setSolid] = useState("Solid");
  const [solids, setSolids] = useState([
    {label: 'Solid', value: 'Solid'},
    {label: 'Liquid', value: 'Liquid'}
  ]);

  const [tripLength, setTripLength] = useState("");
  const [loadValue, setLoadValue] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [stability, setStability] = useState("");
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
    let d = parseFloat(validateValue(length));
    let D42 = 48.0 / d;
    let c42 = 1.0;
    if (d > 0.0) {
      c42 = D42;
    }

    let d2 = parseFloat(validateValue(width));
    let D43 = 40.0 / d2;
    let c43 = 1.0;
    if (d2 > 0.0) {
        c43 = D43;
    }
    
    let d3 = parseFloat(validateValue(height));
    let E44 = ((d3 - 60.0) * 0.00667) + 1.0;
    if (d3 < 60.00001) {
        E44 = ((d3 - 20.0) * 0.005) + 0.8;
    }
    
    let D44 = E44;
    if (height < 20.0001) {
        D44 = 0.8;
    }
    let C44 = 1.0;
    if (height > 0.0) {
        C44 = D44;
    }

    let d4 = parseFloat(validateValue(weight));
    let H45 = ((d4 - 5000.0) * 0.004) + 36.5;
    if (d4 < 5000.0) {
        H45 = ((d4 - 2000.0) * 0.0045) + 19.75;
    }

    let d5 = parseFloat(validateValue(weight));
    let G45 = H45;
    if (d5 < 2000.0) {
        G45 = ((d5 - 1000.0) * 0.0075) + 12.25;
    }

    let d6 = parseFloat(validateValue(weight));
    let F45 = G45;
    if (d6 < 1000.0) {
        F45 = ((d6 - 500.0) * 0.01) + 7.25;
    }

    let d7 = parseFloat(validateValue(weight));
    let E45 = F45;
    if (d7 < 500.0) {
        E45 = ((d7 - 250.0) * 0.005) + 6.0;
    }

    let d8 = parseFloat(validateValue(weight));
    let D45 = E45;
    if (d8 < 250.0) {
        D45 = (d8 * 0.01) + 3.5;
    }

    let C45 = 1.0;
    if (parseFloat(validateValue(weight)) > 0.0) {
        C45 = D45;
    }

    let d9 = parseFloat(validateValue(tripLength));
    let G46 = 1.2375;
    if (d9 < 2000.0) {
        G46 = ((d9 - 1000.0) * 3.0E-4) + 0.9375;
    }

    let d10 = parseFloat(validateValue(tripLength));
    let F46 = G46;
    if (d10 < 1000.0) {
        F46 = ((d10 - 500.0) * 3.5E-4) + 0.7625;
    }

    let d11 = parseFloat(validateValue(tripLength));
    let E46 = F46;
    if (d11 < 500.0) {
        E46 = ((d11 - 250.0) * 8.5E-4) + 0.55;
    }

    let D46 = E46;
    if (d11 < 250.0) {
        let D46 = 0.55;
    }

    let C46 = 1.0;
    if (d11 > 0.0) {
        C46 = D46;
    }

    let P47 = 1.0;
    if (stackValue === "Column") {
        this.P47 = 0.8;
    }

    let O47 = P47;
    if (stackValue === "Column") {
        O47 = 1.2;
    }

    let N47 = O47;
    if (stackValue === "Interlocked") {
        N47 = 0.8;
    }
    
    let M47 = N47;
    if (stackValue === "Interlocked") {
        M47 = 0.8;
    }
    
    let L47 = M47;
    if (stackValue === "Interlocked") {
        L47 = 0.8;
    }

    let K47 = L47;
    if (stackValue === "Column") {
        K47 = 1.2;
    }

    let J47 = K47;
    if (stackValue === "Interlocked") {
        J47 = 0.8;
    }

    let I47 = J47;
    if (stackValue === "Interlocked") {
        I47 = 0.8;
    }

    let H47 = I47;
    if (stackValue === "Column") {
        H47 = 1.2;
    }

    let G47 = H47;
    if (stackValue === "Interlocked") {
        G47 = 0.8;
    }

    let F47 = G47;
    if (stackValue === "Column") {
        F47 = 1.2;
    }

    let E47 = F47;
    if (stackValue === "Interlocked") {
        E47 = 0.8;
    }

    let D47 = E47;
    if (stackValue === "Column") {
        D47 = 1.2;
    }

    let C47 = 1.0;
    if (stackValue !== "") {
        C47 = D47;
    }

    let E48 = 1.0;
    if (solid === "Solid") {
        E48 = 0.8;
    }

    let D48 = E48;
    if (solid === "Liquid") {
        D48 = 1.2;
    }

    let C48 = 1.0;
    if (solid !== "") {
        C48 = D48;
    }

    let strloadvalues = parseFloat(validateValue(loadValue));
    let F49 = 1.5;
    if (strloadvalues < 10000.0) {
        F49 = 1.2;
    }

    let E49 = F49;
    if (strloadvalues < 5000.0) {
        E49 = 1.0;
    }

    let D49 = E49;
    if (strloadvalues < 1000.0) {
        D49 = 0.8;
    }

    let C49 = 1.0;
    if (strloadvalues > 0.0) {
        C49 = D49;
    }

    let I50 = 1.0;
    if (distribution === "LTL") {
        I50 = 1.15;
    }

    let H50 = I50;
    if (distribution === "TL") {
        H50 = 0.85;
    }

    let G50 = H50;
    if (distribution === "LTL") {
        G50 = 1.15;
    }

    let F50 = G50;
    if (distribution === "TL") {
        F50 = 0.85;
    }

    let E50 = F50;
    if (distribution === "LTL") {
        E50 = 1.15;
    }

    let D50 = E50;
    if (distribution === "TL") {
        D50 = 0.85;
    }

    let C50 = 1.0;
    if (!solid !== "") {
        C50 = D50;
    }

    let H51 = 1.0;
    if (parseFloat(validateValue(stability)) == 5.0) {
        H51 = 0.8;
    }

    let G51 = H51;
    if (parseFloat(validateValue(stability)) == 4.0) {
        G51 = 0.9;
    }

    let F51 = G51;
    if (parseFloat(validateValue(stability)) == 3.0) {
        F51 = 1.0;
    }

    let E51 = F51;
    if (parseFloat(validateValue(stability)) == 2.0) {
        E51 = 1.1;
    }

    let D51 = E51;
    if (parseFloat(validateValue(stability)) == 1.0) {
        D51 = 1.2;
    }

    let C51 = 1.0;
    if (parseFloat(validateValue(stability)) > 0.0) {
        C51 = D51;
    }
    
    let C58 = c42 * c43 * C44 * C46 * C47 * C48 * C49 * C50 * C51;
    let d12 = C58;
    let C59 = ((d12 - 1.5) * 0.4) + 1.6;
    if (d12 < 1.5) {
        C59 = d12;
    }

    let C55 = C45 * C59;
    let C56 = 3.5;
    let d13 = C55;
    let d14 = C56;
    let C54 = d14;
    if (d13 > d14) {
        C54 = d13;
    }

    let E65 = NaN;
    if (parseFloat(validateValue(weight)) > 4000.00001) {
        E65 = NaN;
    }

    let D65 = E65;
    if (parseFloat(validateValue(weight)) < 4000.00001) {
        D65 = C54;
    }
    let C65 = D65;
    if (parseFloat(validateValue(weight)) < 50.0) {
        C65 = NaN;
    }
    let d15 = parseFloat(validateValue(height));
    let C61 = ((((((((parseFloat(validateValue(length)) + parseFloat(validateValue(width))) * 2.0) / 12.0) * (d15 / 16.0)) * (C65 / 4.0)) * 20.0) * 70.0) * 4.0E-5) / 1.85;
    let C63 = 2.0;
    if (d15 > 20.0) {
        C63 = ((d15 - 20.0) * 0.05) + 2.0;
    }

    let d16 = C61;
    let F62 = ((d16 - 15.0) * 0.2) + 15.0;
    let E62 = F62;
    if (d16 < 20.0) {
        E62 = ((d16 - 10.0) * 0.5) + 10.0;
    }

    let d17 = C61;
    let D62 = E62;
    if (d17 < 10.0) {
        D62 = d17;
    }

    let d18 = C61;
    let d19 = C63;
    let C62 = d19;
    if (d18 > d19) {
        C62 = D62;
    }

    let E68 = C62;
    if (parseFloat(validateValue(height)) == 0.0) {
        E68 = NaN;
    }

    let D68 = E68;
    if (parseFloat(validateValue(width)) == 0.0) {
        D68 = NaN;
    }

    let C68 = D68;
    if (parseFloat(validateValue(length)) == 0.0) {
        C68 = NaN;
    }

    setResultA(C65.toFixed(1));
    setResultB(C68.toFixed(2));
  }

  const onReset = () => {
    setWeight("");
    setTripLength("");
    setLoadValue("");
    setLength("");
    setWidth("");
    setHeight("");
    setStability("");
    setStackValue("Column");
    setDistribution("TL");
    setSolid("Solid");

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

          <KeyboardAvoidingView style={styles.contentContainer} behavior={Platform.OS === "ios" ? "height" : ""}>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.mainContainer}>
                <Image source={require("@images/container.png")} style={styles.mainIcon} />
                <Text style={styles.mainTitleText}>CONTAINMENT FORCE</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Load Weight</Text>
                <TextInput
                  value={`${weight}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setWeight(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>lbs</Text>
              </View>

              <View style={[styles.valueContainer, { zIndex: 4 }]}>
                <Text style={styles.valueTitleText}>Stack</Text>
                <DropDownPicker
                  open={openStack}
                  value={stackValue}
                  items={items}
                  setOpen={setOpenStack}
                  setValue={setStackValue}
                  setItems={setItems}
                  style={styles.containerStyle}
                  containerStyle={styles.dropdownStyle}
                  listMode={"SCROLLVIEW"}
                />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <View style={[styles.valueContainer, { zIndex: 3 }]}>
                <Text style={styles.valueTitleText}>Distribution</Text>
                <DropDownPicker
                  open={openDistribution}
                  value={distribution}
                  items={distributions}
                  setOpen={setOpenDistribution}
                  setValue={setDistribution}
                  setItems={setDistributions}
                  style={styles.containerStyle}
                  containerStyle={styles.dropdownStyle}
                  listMode={"SCROLLVIEW"}
                />
                <Text style={styles.valueUnitText}></Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Trip Length</Text>
                <TextInput
                  value={`${tripLength}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setTripLength(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>miles</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Load Value</Text>
                <TextInput
                  value={`${loadValue}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setLoadValue(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>USD</Text>
              </View>

              <View style={[styles.valueContainer, { zIndex: 2 }]}>
                <Text style={styles.valueTitleText}>Solid/Liquid</Text>
                <DropDownPicker
                  open={openSolid}
                  value={solid}
                  items={solids}
                  setOpen={setOpenSolid}
                  setValue={setSolid}
                  setItems={setSolids}
                  style={styles.containerStyle}
                  containerStyle={styles.dropdownStyle}
                  listMode={"SCROLLVIEW"}
                />
                <Text style={styles.valueUnitText}></Text>
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
                <Text style={styles.valueUnitText}>inches</Text>
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
                <Text style={styles.valueUnitText}>inches</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Height</Text>
                <TextInput
                  value={`${height}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setHeight(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>inches</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Load stability from 1 - 5</Text>
                <TextInput
                  value={`${stability}`}
                  style={styles.valueInput}
                  placeholder={"0.0"}
                  placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                  onChangeText={(text) => setStability(text)}
                  keyboardType={"numeric"}
                  returnKeyType={"done"} />
                <Text style={styles.valueUnitText}>inches</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Minimum Recommended Containment Force</Text>
                <TextInput
                  value={`${resultA}`}
                  style={styles.valueInput}
                  editable={false} />
                <Text style={styles.valueUnitText}>lbs</Text>
              </View>

              <View style={styles.valueContainer}>
                <Text style={styles.valueTitleText}>Estimated amount of film to be applied to load</Text>
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

export default CalculatorContainmentScreen;