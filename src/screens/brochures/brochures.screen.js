import React from 'react';
import { Image, SafeAreaView, View, TouchableOpacity, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Validator, widthPercentageToDP as wp } from "@helpers";

import styles, { width as screenWidth } from './brochures.style';

const brochures = [
  "Steelflex Machine",
  "Steelflex Xtreme Machine",
  "Steelflex Nano Machine",
  "Arctic Nano Machine",
  "Steelflex Hand",
  "Steelflex Xtreme Hand",
  "Duo Pre-Stretch",
  "Bolt Hand Dispenser",
  "Spectrum Colors",
  "Titanium",
  "Airforce Vented",
  "Banding Film"
];

const BrochuresScreen: () => React$Node = (props) => {
  const insets = useSafeAreaInsets();
  let isPhoneX = Validator.isIphoneXorAbove();
  let headerImage = isPhoneX ? require('@images/questions-header-x.png') : require('@images/questions-header.png');

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
            <FlatList
              data={brochures}
              contentContainerStyle={styles.brochureList}
              keyExtractor={(item, index) => `video-${index}`}
              renderItem={({item: item, index}) => {
                return (
                  <TouchableOpacity style={styles.itemContainer}
                    onPress={() => {
                      if (item === 'Duo Pre-Stretch') {
                        props.navigation.navigate("PDFViewer", { title: item, name: 'DuoNanoPreStretch' });
                      } else {
                        props.navigation.navigate("PDFViewer", { title: item, name: item.replaceAll(" ", "") });
                      }
                    }}
                  >
                    <Text style={styles.itemTitle}>{`${index + 1}. ${item}`}</Text>
                    <Image source={require('@images/right-arrow.png')} style={styles.itemIcon} />
                  </TouchableOpacity>
                )
              }}
            />            
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default BrochuresScreen;