/* eslint-disable no-unused-expressions */
import React from 'react';
import { TouchableOpacity } from 'react-native';

const TouchableComponent = props => {
  const { onPress, pressDisabled } = props;
  let disabled = false;
  function handleOnPress(...args) {
    if (disabled) return;
    disabled = true;
    setTimeout(() => {
      disabled = false;
    }, 500);
    onPress && onPress(...args);
  }
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={props.style}
      activeOpacity={0.7}
      disabled={pressDisabled}>
      {props.children}
    </TouchableOpacity>
  );
};

export default TouchableComponent;
