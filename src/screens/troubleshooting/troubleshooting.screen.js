import React, { useState } from 'react';
import { Image, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { Text } from '@components';
import { Validator, widthPercentageToDP as wp } from "@helpers";

import styles, { width as screenWidth } from './troubleshooting.style';

const guides = [
  {
    question: "The stretch film is slipping and not stretching properly and is making roller impressions?",
    solution: "The roll is probably not on correctly and may need to be turned upside down.  Try to allow the film outside layer to be applied without direct contact on the load.",
    image: require("@images/guide_1.png")
  },
  {
    question: "I’m getting holes in my stretch film and it is breaking badly.",
    solution: "check to see if the rollers are in bad shape, slit with a knife or have a hole in their texture.  Use sandpaper to sand it down and try to change out the rollers.",
    image: require("@images/guide_2.png")
  },
  {
    question: "Is the film tearing from the edge of the web?",
    solution: "Look at the roll and see if the winds are feathered or uneven.  Also, make sure the roll is free of nicks or gouges that are too deep.  Also, assure people are holding and handling the roll correctly to assure proper film usage.",
    image: require("@images/guide_3.png")
  },
  {
    question: "The film is necking down a lot and breaking at the corners.",
    solution: "The film is under too much tension.  Either go to a higher gauge or higher end film or turn down the tension or turn down the carriage and turntable speed.",
    image: require("@images/guide_4.png")
  },
  {
    question: "The film is barber poling.",
    solution: "Look for the edges of the web to see if they are folded over or nicked badly.  Also, look to see if the film is running into something in the wrapper.  See if the wind of the film is wavy or smooth.",
    image: require("@images/guide_5.png")
  },
  {
    question: "I am having trouble with the cling of the film not wiping down.",
    solution: "If this is a machine application, make sure the roll is on correctly with the cling on the inside toward the pallet.  Also, make sure there is not too much tension at the end of the cycle when the film cuts off or is torn off by operator.  \nHand Wrap, make sure you are wrapping with the proper cling inside toward the pallet and also wiping down with proper tension.  You may have low cling on your film which is a factory defect and may require adjustment from the mill.",
    image: require("@images/guide_6.png")
  },
];

const TroubleshootingScreen: () => React$Node = (props) => {
  const [visibleSolution, setVisibleSolution] = useState(-1);
  let carouselRef = React.createRef();

  const insets = useSafeAreaInsets();
  let isPhoneX = Validator.isIphoneXorAbove();
  let headerImage = isPhoneX ? require('@images/troubleshooting-header-x.png') : require('@images/troubleshooting-header.png');

  let contentPaddingTop = screenWidth / 879 * 465 - insets.top;
  if (isPhoneX) {
    contentPaddingTop = screenWidth / 879 * 515 - insets.top;
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <TouchableOpacity style={styles.flexFill}
          activeOpacity={0.9}
          onPress={() => {
            if (visibleSolution === index) {
              setVisibleSolution(-1);
            } else {
              setVisibleSolution(index);
            }
          }}>
          <Image source={item.image} style={styles.slideImage} />
        </TouchableOpacity>
        {visibleSolution !== index &&
        <Text style={styles.questionText}>{ item.question }</Text>}

        {visibleSolution === index &&
        <View style={[styles.absoluteFill, styles.solutionContainer]} pointerEvents={"none"}>
          <Text style={styles.solutionTitle}>SOLUTION:</Text>
          <View style={styles.solutionTextContainer}>
            <Text style={styles.solutionText}>{ item.solution }</Text>
          </View>
        </View>}
      </View>
    )
  }

  return (
    <View style={styles.rootContainer}>

      <Image source={headerImage} style={isPhoneX ? styles.logoX : styles.logo} resizeMode={"cover"} />

      <SafeAreaView style={styles.absoluteFill}>
        <View style={[styles.flexFill, {paddingTop: contentPaddingTop}]}>

          <TouchableOpacity 
            style={[styles.hamburgButton, isPhoneX && styles.hamburgButtonX]}
            onPress={() => props.navigation.openDrawer()} />

          <View style={styles.carouselContainer}>
            <Carousel
              ref={(c) => { carouselRef = c; }}
              data={guides}
              renderItem={renderItem}
              sliderWidth={screenWidth}
              itemWidth={screenWidth / 3 * 2}
              layoutCardOffset={18}
              onSnapToItem={(slideIndex) => {
                setVisibleSolution(-1);
              }}
            />

            <TouchableOpacity style={styles.prevButton}
              activeOpacity={0.8}
              onPress={() => carouselRef.snapToPrev()}>
              <Text style={styles.buttonText}>{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton}
              activeOpacity={0.8}
              onPress={() => carouselRef.snapToNext()}>
              <Text style={styles.buttonText}>{">"}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default TroubleshootingScreen;