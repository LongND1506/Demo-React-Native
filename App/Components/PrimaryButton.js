import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import colors from '../Themes/Colors';

const PrimaryButton = ({
  text = '',
  additionStyles = {},
  onPress = () => {},
  isDisable = false,
  isLoading = false,
}) => (
  <TouchableHighlight
    disabled={isDisable}
    onPress={onPress}
    style={{...styles.buttonWrapper, ...additionStyles}}>
    {isLoading ? (
      <ActivityIndicator
        animating={isLoading}
        size="small"
        color={colors.white}
      />
    ) : (
      <Text style={styles.buttonText}>{text}</Text>
    )}
  </TouchableHighlight>
);

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    marginVertical: 5,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 15,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
  },
});
