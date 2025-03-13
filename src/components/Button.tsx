import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  height: number;
  width: number;
  label: string;
  icon?: React.JSX.Element;
  onPress: () => void;
};

function Button({
  width,
  height,
  label,
  icon,
  onPress,
}: ButtonProps): React.JSX.Element {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {width: width, height: height, backgroundColor: colors.backgroundLight},
      ]}
      onPress={onPress}>
      <Text style={{color: colors.text}}>{label}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 5,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'AvenirNextLTPro-Regular',
  },
});
