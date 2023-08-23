import React from 'react';
import { Image, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientButton, Text } from "@components";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './calculator.style';

const CalculatorScreen: () => React$Node = (props) => {
  const insets = useSafeAreaInsets();
  let isPhoneX = Validator.isIphoneXorAbove();
  let headerImage = isPhoneX ? require('@images/calculator-header-x.png') : require('@images/calculator-header.png');

  let contentPaddingTop = screenWidth / 879 * 465 - insets.top;
  if (isPhoneX) {
    contentPaddingTop = screenWidth / 879 * 515 - insets.top;
  }

  return (
    <View style={styles.rootContainer}>

      <Image source={headerImage} style={isPhoneX ? styles.logoX : styles.logo} resizeMode={"cover"} />

      <SafeAreaView style={styles.absoluteFill}>
        <View style={[styles.flexFill, {paddingTop: contentPaddingTop}]}>

          <TouchableOpacity 
            style={[styles.hamburgButton, isPhoneX && styles.hamburgButtonX]}
            onPress={() => props.navigation.openDrawer()} />

          <View style={styles.contentContainer}>

            <GradientButton
              containerStyle={styles.buttonContainer}
              onPress={() => props.navigation.navigate("CalculatorWeight")}>
              <Image source={require("@images/ic_balance.png")} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>WEIGHT PER ROLL</Text>
            </GradientButton>

            <View style={styles.flexRow}>
              <View style={[styles.flexFill, { marginRight: 10 }]}>
                <GradientButton
                  containerStyle={styles.rowButtonContainer}
                  onPress={() => props.navigation.navigate("CalculatorMetric")}>
                  <Image source={require("@images/ic_conversion.png")} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>{"METRIC\nCONVERSION"}</Text>
                </GradientButton>
              </View>

              <View style={styles.flexFill}>
                <GradientButton
                  containerStyle={styles.rowButtonContainer}
                  onPress={() => props.navigation.navigate("CalculatorRoll")}>
                  <Image source={require("@images/ic_diameter.png")} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>{"ROLL\nDIAMETER"}</Text>
                </GradientButton>
              </View>
            </View>

            <View style={styles.flexRow}>
              <View style={[styles.flexFill, { marginRight: 10 }]}>
                <GradientButton
                  containerStyle={styles.rowButtonContainer}
                  onPress={() => props.navigation.navigate("CalculatorLoad")}>
                  <Image source={require("@images/ic_bank.png")} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>{"LOAD\nPRICE"}</Text>
                </GradientButton>
              </View>

              <View style={styles.flexFill}>
                <GradientButton
                  containerStyle={styles.rowButtonContainer}
                  onPress={() => props.navigation.navigate("CalculatorFtl")}>
                  <Image source={require("@images/ic_delivery_truck.png")} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>{"FTL MIN\nNEEDED"}</Text>
                </GradientButton>
              </View>
            </View>

            <View style={styles.flexRow}>
              <View style={[styles.flexFill, { marginRight: 10 }]}>
                <GradientButton
                  containerStyle={styles.rowButtonContainer}
                  onPress={() => props.navigation.navigate("CalculatorContainment")}>
                  <Image source={require("@images/container.png")} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>{"CONTAINMENT\nFORCE"}</Text>
                </GradientButton>
              </View>

              <View style={styles.flexFill}>
                <GradientButton
                  containerStyle={styles.rowButtonContainer}
                  onPress={() => props.navigation.navigate("CalculatorStretch")}>
                  <Image source={require("@images/stretch.png")} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>{"STRETCH\nLEVEL"}</Text>
                </GradientButton>
              </View>
            </View>

          </View>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default CalculatorScreen;