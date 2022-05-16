import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Overlay} from '@rneui/themed';
import VideoPlayer from 'react-native-video-controls';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height} = Dimensions.get('screen');

const VideoPlayers = () => {
  const [visible, setVisible] = useState(true);
  const [screen, setScreen] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
        <Overlay
          isVisible={visible}
          fullScreen={screen}
          onBackdropPress={toggleOverlay}
          overlayStyle={screen === false && styles.overlayPosition}>
          <VideoPlayer
            disableVolume={true}
            disableFullscreen={true}
            disableBack={true}
            source={{
              uri: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
            }}
            tapAnywhereToPause={true}
            style={styles.videoPlayer}
          />
          <View style={{flexDirection: 'row', position: 'relative'}}>
            <MaterialCommunityIcon
              name="arrow-top-right-bottom-left"
              size={25}
              color="white"
              onPress={() => {
                screen === false ? setScreen(true) : setScreen(false);
              }}
              style={styles.icons}
            />
          </View>
        </Overlay>
    </View>
  );
};

export default VideoPlayers;

const styles = StyleSheet.create({
  overlay: {
    marginRight: '50%',
  },
  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  icons: {
    marginLeft: '80%',
    marginVertical: '150%',
    justifyContent: 'flex-end',
    marginTop: '10%',
    alignItems: 'flex-end',
  },
  overlayPosition: {
    marginRight: 170,
    marginTop: height - 550,
  },
});
