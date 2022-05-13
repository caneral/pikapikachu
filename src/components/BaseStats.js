import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProgressBar from './ProgressBar';

const BaseStats = ({item}) => {
  const statName = item?.stat?.name;
  const baseStat = item?.base_stat;
  return (
    <View style={styles.container}>
      <View style={styles.statName}>
        <Text style={styles.stat}>{statName}</Text>
      </View>
      <View style={styles.progress}>
        <Text style={styles.baseStat}>{baseStat}</Text>
        <ProgressBar completed={baseStat} statName={statName} />
      </View>
    </View>
  );
};

export default BaseStats;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  baseStat: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    marginHorizontal: 10,
    width:'12%'
  },
  stat: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    marginHorizontal: 10,
  },
  statName: {
    width: '45%',
  },
});
