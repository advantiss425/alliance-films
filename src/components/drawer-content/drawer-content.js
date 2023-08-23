import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '../text';

import styles from './drawer-content.style';

const AppDrawerContent: () => React$Node = (props) => {
  const renderSeperator = () => {
    return (
      <LinearGradient 
        colors={["rgba(14, 53, 132, 0.3)", "#0e3584", "rgba(14, 53, 132, 0.3)"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.seperator}
        />
    )
  }

  const renderSeperatorWhite = () => {
    return (
      <LinearGradient 
        colors={["rgba(255, 255, 255, 0.3)", "white", "rgba(255, 255, 255, 0.3)"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.seperator}
        />
    )
  }

  return (
    <LinearGradient
        colors={["#05176B", "#5397D8", "#031567"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <DrawerContentScrollView {...props}>

          <TouchableOpacity style={styles.mainMenu}
            onPress={() => props.navigation.navigate("Home")}>
            <Image source={require("@images/ic_house.png")} style={styles.mainMenuIcon} />
            <Text style={styles.mainMenuText}>{"HOME"}</Text>
          </TouchableOpacity>
          {renderSeperator()}

          <TouchableOpacity style={styles.mainMenu}
            onPress={() => props.navigation.navigate("FilmSelector")}>
            <Image source={require("@images/insulating-tape.png")} style={styles.mainMenuIcon} />
            <Text style={styles.mainMenuText}>{"FILM SELECTOR"}</Text>
          </TouchableOpacity>
          {renderSeperator()}

          <TouchableOpacity style={styles.mainMenu}
            onPress={() => props.navigation.navigate("Calculator")}>
            <Image source={require("@images/ic_calculator.png")} style={styles.mainMenuIcon} />
            <Text style={styles.mainMenuText}>{"CALCULATOR"}</Text>
          </TouchableOpacity>
          {renderSeperator()}

          <View style={styles.subMenuContainer}>
            <TouchableOpacity style={styles.subMenu}
              onPress={() => props.navigation.navigate("CalculatorWeight")}>
              <Image source={require("@images/ic_balance.png")} style={styles.subMenuIcon} />
              <Text style={styles.subMenuText}>{"WEIGHT PER ROLL"}</Text>
            </TouchableOpacity>
            {renderSeperatorWhite()}
            <TouchableOpacity style={styles.subMenu}
              onPress={() => props.navigation.navigate("CalculatorMetric")}>
              <Image source={require("@images/ic_conversion.png")} style={styles.subMenuIcon} />
              <Text style={styles.subMenuText}>{"METRIC CONVERSION"}</Text>
            </TouchableOpacity>
            {renderSeperatorWhite()}
            <TouchableOpacity style={styles.subMenu}
              onPress={() => props.navigation.navigate("CalculatorRoll")}>
              <Image source={require("@images/ic_diameter.png")} style={styles.subMenuIcon} />
              <Text style={styles.subMenuText}>{"ROLL DIAMETER"}</Text>
            </TouchableOpacity>
            {renderSeperatorWhite()}
            <TouchableOpacity style={styles.subMenu}
              onPress={() => props.navigation.navigate("CalculatorLoad")}>
              <Image source={require("@images/ic_bank.png")} style={styles.subMenuIcon} />
              <Text style={styles.subMenuText}>{"LOAD PRICE"}</Text>
            </TouchableOpacity>
            {renderSeperatorWhite()}
            <TouchableOpacity style={styles.subMenu}
              onPress={() => props.navigation.navigate("CalculatorFtl")}>
              <Image source={require("@images/ic_delivery_truck.png")} style={styles.subMenuIcon} />
              <Text style={styles.subMenuText}>{"FTL MIN NEEDED"}</Text>
            </TouchableOpacity>
            {renderSeperatorWhite()}
            <TouchableOpacity style={styles.subMenu}
              onPress={() => props.navigation.navigate("CalculatorContainment")}>
              <Image source={require("@images/container.png")} style={styles.subMenuIcon} />
              <Text style={styles.subMenuText}>{"CONTAINMENT FORCE"}</Text>
            </TouchableOpacity>
            {renderSeperatorWhite()}
            <TouchableOpacity style={styles.subMenu}
              onPress={() => props.navigation.navigate("CalculatorStretch")}>
              <Image source={require("@images/stretch.png")} style={styles.subMenuIcon} />
              <Text style={styles.subMenuText}>{"STRETCH LEVEL"}</Text>
            </TouchableOpacity>
            {renderSeperatorWhite()}
          </View>

          <TouchableOpacity style={styles.mainMenu}
            onPress={() => props.navigation.navigate("Brochures")}>
            <Image source={require("@images/ic_brochure.png")} style={styles.mainMenuIcon} />
            <Text style={styles.mainMenuText}>{"BROCHURES"}</Text>
          </TouchableOpacity>
          {renderSeperator()}

          <TouchableOpacity style={styles.mainMenu}
            onPress={() => props.navigation.navigate("Videos")}>
            <Image source={require("@images/play-button.png")} style={styles.mainMenuIcon} />
            <Text style={styles.mainMenuText}>{"VIDEOS"}</Text>
          </TouchableOpacity>
          {renderSeperator()}

          <TouchableOpacity style={styles.mainMenu}
            onPress={() => props.navigation.navigate("Troubleshooting")}>
            <Image source={require("@images/toolbox.png")} style={styles.mainMenuIcon} />
            <Text style={styles.mainMenuText}>{"TROUBLE\nSHOOTING GUIDE"}</Text>
          </TouchableOpacity>

          <View style={styles.bottomSpacer} />

        </DrawerContentScrollView>
    </LinearGradient>
  );
};

export { AppDrawerContent };