import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

function Comecar({ navigation }){
  return (
    <View style={styles.container}>
    <TouchableOpacity
        style={styles.button}
        onPress= {() => navigation.navigate()}
        >
        <Text style= {styles.texto}>CONTINUAR</Text>
    </TouchableOpacity>
    
    </View>
  );
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems:'center',
    marginTop: 15
  },
  button:{
    padding:13,
    backgroundColor:"#66BF00",
    color:"#FFFFFF",
    borderRadius:20,
    width: 255,
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,
  },
  texto:{
    color:'#FFFFFF',
    fontSize:14,
    fontWeight:'medium'
  }
  });
