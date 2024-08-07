import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface ColorDisplayProps {
  backgroundColor: string;
  changeBackgroundColor: () => void;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ backgroundColor, changeBackgroundColor }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.colorArea, { backgroundColor }, { borderColor: colors.border }]} 
      onPress={changeBackgroundColor}
    >
      <Text style={{ color: colors.text, fontSize: 18, fontWeight: 'bold' }}>
        Hello There
      </Text>
      <Text style={{ color: colors.text, fontSize: 18 }}>
        Current Color: {backgroundColor.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  colorArea: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});

export default ColorDisplay;
