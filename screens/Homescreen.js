import {SafeAreaView, Text } from 'react-native';
import React from 'react';
import VideoPlayers from '../components/VideoPlayer';

const Homescreen = () => {
  return (
    <SafeAreaView>
      <Text>Homescreen</Text>
      <VideoPlayers />
    </SafeAreaView>
  )
};


export default Homescreen;
