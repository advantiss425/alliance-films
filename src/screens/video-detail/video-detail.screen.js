import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import YouTube from 'react-native-youtube';

import styles from './video-detail.style';

const VideoDetailScreen: () => React$Node = (props) => {
  return (
    <View style={styles.rootContainer}>
      <StatusBar hidden />
      <SafeAreaView style={styles.flexFill}>
        <View style={styles.contentContainer}>
          <YouTube
            videoId={props.route.params.videoId}
            apiKey={"AIzaSyDx6UxXfqmB9nq8JmYjUF7x7lXrwWrHOgs"}
            controls = {1}
            play
            style={styles.player}
            onError={(e) => {
              console.log(e);
            }}/>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {props.navigation.goBack()}}
            style={styles.closeButton}>
            <Image source={require('@images/icn_whiteback.png')} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default VideoDetailScreen;