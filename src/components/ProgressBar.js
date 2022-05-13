import React from 'react';
import {StyleSheet, View} from 'react-native';

const ProgressBar = props => {
  const {completed, statName} = props;

  const colors = {
    hp: '#fc6c6d',
    attack: '#49d0b0',
    defense: '#c98283',
    'special-attack': '#6aae87',
    'special-defense': '#64b283',
    speed: '#ce807f',
  };

  return (
    <View style={styles.containerStyles}>
      <View style={styles.fillerStyles(completed, colors[statName])} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  fillerStyles: (completed, bgcolor) => ({
    height: '100%',
    width: `${completed }%`,
    backgroundColor: bgcolor,
    borderRadius: 32,
  }),
  containerStyles: {
    height: 5,
    width: '50%',
    backgroundColor: '#e0e0de',
    borderRadius: 32,
    marginHorizontal: 10,
  },
});
