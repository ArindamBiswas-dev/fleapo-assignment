import {useTheme} from '@react-navigation/native';
import React from 'react';
import {DimensionValue, StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  height: number | string;
  width: number | string;
  label: string;
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
  onPress: () => void;
};

function Button({
  width,
  height,
  label,
  leftIcon,
  rightIcon,
  onPress,
}: ButtonProps): React.JSX.Element {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width as DimensionValue,
          height: height as DimensionValue,
          backgroundColor: colors.backgroundLight,
        },
      ]}
      onPress={onPress}>
      {leftIcon ? leftIcon : <></>}
      <Text style={{color: colors.text}}>{label}</Text>
      {rightIcon ? rightIcon : <></>}
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
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
