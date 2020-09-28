import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, CheckBox, TouchableOpacity } from 'react-native';
import Paragrafo from './paragrafo'
import Candidato from './candidatos'
export default function Frame5({navigation}) {

  return (
    <View style= {styles.container}> 
        <View style= {styles.row}>
    <Image style={styles.logo} source={require('../../assets/Logo/Votar.png')}/>
    <Text style= {styles.title}>Eleições em {"\n"} localização </Text>
    </View>
    <Paragrafo/>
    <Candidato/>
         <TouchableOpacity
        style={styles.button}
        onPress= {() => navigation.navigate('frame6')}
        >
        <Text style= {styles.texto}>CONTINUAR</Text>
    </TouchableOpacity>
    
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    paddingTop: 30
  },
  row:{
        flexDirection: 'row',
  },
  logo:{
    height:60,
    width:60
  },
  title: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 23,
    lineHeight: 30,
    alignItems: 'center'
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
    fontWeight:'500'
  }
});