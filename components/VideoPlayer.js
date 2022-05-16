import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Overlay} from '@rneui/themed';
import VideoPlayer from 'react-native-video-controls';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('screen');

const VideoPlayers = () => {
  const [visible, setVisible] = useState(true);
  const [screen, setScreen] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // const overlayScreen =() =>{
  //   setScreen(screen)
  // }

  return (
    <View>
      <View>
        <Overlay
          isVisible={visible}
          fullScreen={screen}
          onBackdropPress={toggleOverlay}
          overlayStyle={screen === false ? styles.overlayPosition : null}>
          <VideoPlayer
            disableVolume={true}
            disableFullscreen={true}
            disableBack={true}
            source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
            style={styles.videoPlayer}
          />
          <View style={{flexDirection: 'row'}}>
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
    marginLeft: '70%',
    marginVertical: '70%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
  },
  overlayPosition: {
    marginRight: 200,
    marginTop: height - 450,
    borderRadius: 15,
  },
});
