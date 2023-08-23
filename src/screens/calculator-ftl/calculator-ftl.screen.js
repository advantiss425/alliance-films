import React, { useState } from 'react';
import { 
  Image, SafeAreaView, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Modal, ScrollView 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientButton, Text } from "@components";
import { COLOR } from "@config";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './calculator-ftl.style';

const CalculatorFtlScreen: () => React$Node = (props) => {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [visibleFullImage, setVisibleFullImage] = useState(false);

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

    setResult((nWeight / 100.0).toFixed(2));
  }

  const onReset = () => {
    setWeight("");
    setResult("");
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
              <Image source={require("@images/ic_delivery_truck.png")} style={styles.mainIcon} />
              <Text style={styles.mainTitleText}>FTL MIN NEEDED</Text>
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueTitleText}>Weight of Load</Text>
              <TextInput
                value={`${weight}`}
                style={styles.valueInput}
                placeholder={"0.0"}
                placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
                onChangeText={(text) => setWeight(text)}
                keyboardType={"numeric"}
                returnKeyType={"done"} />
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueTitleText}>Min FTL required</Text>
              <TextInput
                value={`${result}`}
                style={styles.valueInput}
                editable={false} />
            </View>

            <ScrollView style={styles.flexFill}>
              <View style={styles.descContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setVisibleFullImage(true)}>
                  <Image source={require('@images/ftl-desc.jpg')} style={styles.descImage} />
                </TouchableOpacity>
                <Text style={styles.descText}>
                  Force to Load is the total force applied to your load at a given point. It's produced by a wrap force, or tightness, multiplied by the number of stretch film revolutions. Using the right amount of stretch film containment force can be the difference between your products getting from point A to point B in one piece, or damaged. It is essential that you know the right amount of force to load you need. This easy multiplier helps you do this.
                </Text>
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

      <Modal
        visible={visibleFullImage}
        transparent>
        <TouchableOpacity style={styles.modalContainer}
          activeOpacity={0.9}
          onPress={() => setVisibleFullImage(false)}>
          <Image source={require('@images/ftl-desc.jpg')} style={styles.modalImage} resizeMode={'contain'} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CalculatorFtlScreen;