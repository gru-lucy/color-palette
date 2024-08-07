import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedView } from '../ThemedView';

interface ColorHistoryProps {
  colorHistory: string[];
  setBackgroundColor: (color: string) => void;
}

const ColorHistory: React.FC<ColorHistoryProps> = ({ colorHistory, setBackgroundColor }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.historyContainer}>
    {colorHistory.map((color, index) => (
      <TouchableOpacity onPress={() => setBackgroundColor(color)}>
        <ThemedView key={index} style={[styles.historyBlock, { backgroundColor: color }]} />
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  historyContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  historyBlock: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});

export default ColorHistory;
