import {SafeAreaView, Text, StyleSheet } from 'react-native';
import React from 'react';
import VideoPlayers from '../components/VideoPlayer';

const Homescreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Homescreen</Text>
      <VideoPlayers />
    </SafeAreaView>
  )
};


export default Homescreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})
