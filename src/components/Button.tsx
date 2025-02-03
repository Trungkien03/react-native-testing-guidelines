import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

const Button = ({label, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
