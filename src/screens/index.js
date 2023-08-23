import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppDrawerContent } from "@components";

import HomeScreen from './home';
import CalculatorScreen from './calculator';
import CalculatorWeightScreen from './calculator-weight';
import CalculatorMetricScreen from './calculator-metric';
import CalculatorRollScreen from './calculator-roll';
import CalculatorLoadScreen from './calculator-load';
import CalculatorFtlScreen from './calculator-ftl';
import CalculatorContainmentScreen from './calculator-containment';
import CalculatorStretchLevelScreen from './calculator-stretch-level';
import TroubleshootingScreen from './troubleshooting';
import FilmSelectorScreen from './film-selector';
import BrochuresScreen from './brochures';
import VideosScreen from './videos';
import VideoDetailScreen from './video-detail';
import PDFViewerScreen from './pdf-viewer';
import FilmMainScreen from './film-selector/film-main/film-main.screen';
import FilmSubScreen from './film-selector/film-sub/film-sub.screen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const VideoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
      <Stack.Screen name="VideosHome" component={VideosScreen} />
      {/* <Stack.Screen name="VideoDetail" component={VideoDetailScreen} /> */}
    </Stack.Navigator>
  );
};

const FilmNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
      <Stack.Screen name="FilmSelectorMain" component={FilmMainScreen} />
      <Stack.Screen name="FilmSelectorMainSub" component={FilmSubScreen} />
    </Stack.Navigator>
  );
};

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <AppDrawerContent {...props} />}
      screenOptions={{ 
        headerShown: false,
        drawerStyle: { backgroundColor: 'transparent' },
        drawerType: 'front'
      }}
    >

      <Drawer.Screen name="Home" component={HomeScreen} />

      <Drawer.Screen name="Calculator" component={CalculatorScreen} />
      <Drawer.Screen name="CalculatorWeight" component={CalculatorWeightScreen} />
      <Drawer.Screen name="CalculatorMetric" component={CalculatorMetricScreen} />
      <Drawer.Screen name="CalculatorRoll" component={CalculatorRollScreen} />
      <Drawer.Screen name="CalculatorLoad" component={CalculatorLoadScreen} />
      <Drawer.Screen name="CalculatorFtl" component={CalculatorFtlScreen} />
      <Drawer.Screen name="CalculatorContainment" component={CalculatorContainmentScreen} />
      <Drawer.Screen name="CalculatorStretch" component={CalculatorStretchLevelScreen} />

      <Drawer.Screen name="Troubleshooting" component={TroubleshootingScreen} />

      <Drawer.Screen name="FilmSelector" component={FilmSelectorScreen} />

      <Drawer.Screen name="Brochures" component={BrochuresScreen} />

      <Drawer.Screen name="Videos" component={VideoStackNavigator} />

    </Drawer.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainDrawerNavigator} />
        <Stack.Screen name="VideoDetail" component={VideoDetailScreen} />
        <Stack.Screen name="PDFViewer" component={PDFViewerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { AppContainer, FilmNavigator };
