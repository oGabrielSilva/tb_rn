import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fonts from '../utils/template';

const LogIn = () => (
  <View style={{ ...style.container, backgroundColor: 'red' }}>
    <Text style={style.icon}>TailBook</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    fontFamily: fonts.montserratBold,
    fontSize: fonts.sizes.title,
  },
});

export default LogIn;
