import React from 'react';
import { Image, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';

import styles from './home.style';

const HomeScreen: () => React$Node = (props) => {

  const onCalculator = () => {
    props.navigation.navigate("Calculator");
  }

  const onBrochures = () => {
    props.navigation.navigate("Brochures");
  }

  const onTroubleShooting = () => {
    props.navigation.navigate("Troubleshooting");
  }

  const onFilmSelector = () => {
    props.navigation.navigate("FilmSelector");
  }

  const onVideos = () => {
    props.navigation.navigate("Videos");
  }

  return (
    <View style={styles.flexFill}>

      <Image source={require('@images/home-logo.jpg')} style={styles.logo} resizeMode={"cover"} />

      <SafeAreaView style={styles.flexFill}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.buttonsContainer}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={onFilmSelector}>
              <Image source={require('@images/film-selectors.png')}
                style={styles.buttonImage} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={onCalculator}>
              <Image source={require('@images/calculator.png')}
                style={styles.buttonImage} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={onBrochures}>
              <Image source={require('@images/brochures.png')}
                style={styles.buttonImage} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={onVideos}>
              <Image source={require('@images/video-crop.png')}
                style={styles.buttonImage} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={onTroubleShooting}>
              <Image source={require('@images/troubleshooting.png')}
                style={styles.buttonImage} />
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;