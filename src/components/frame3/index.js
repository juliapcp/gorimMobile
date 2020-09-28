import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
export default function Frame3() {
  return (
    <View style={styles.container}>
    <Text style={styles.header}> Gorim </Text>
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../../assets/Logo/Dados.png')}/>
    <Text style={styles.loading}> Sorteando Personagens... </Text>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center'
  },
  logo:{
  width: 200,
  height: 200
  },
  loading:{
  fontFamily: 'Rubik',
  fontSize: 22,
  lineHeight: 32,
  alignItems: 'center',
  }
});