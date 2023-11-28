import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const LeftScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LeftScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 100,
  },
});
export default LeftScreen;
