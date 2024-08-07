import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import ColorDisplay from '@/components/color-changer/ColorDisplay';
import ColorHistory from '@/components/color-changer/ColorHistory';

export default function ColorChangerScreen() {
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');
  const [colorHistory, setColorHistory] = useState<string[]>([]);

  const changeBackgroundColor = () => {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setBackgroundColor(newColor);
    setColorHistory([newColor, ...colorHistory].slice(0, 5));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffcce6', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="color-palette" style={styles.headerImage} />}
    >
      <ThemedView style={styles.container}>
        <ColorDisplay
          backgroundColor={backgroundColor}
          changeBackgroundColor={changeBackgroundColor}
        />
        <ColorHistory colorHistory={colorHistory} setBackgroundColor={setBackgroundColor} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    color: '#ff3399',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});
