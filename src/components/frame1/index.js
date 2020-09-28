import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function Frame1( { navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.row}>
    <Image
    style={styles.logo}
    source={require('../../assets/Logo/Trator.png')}
    />
    <Text style={styles.texto}>Gorim</Text>
    </View>
    <Image
    style={styles.logo2}
    source={require('../../assets/Logo/Animação.png')}
    />
    <View style={styles.container}>
    <TouchableOpacity
        style={styles.button}
        onPress= {() => navigation.navigate("frame4")}>
        <Text style= {styles.buttontext}>COMEÇAR</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#EBFFFD',
    alignItems:'center'
  },
  texto:{
    fontSize:60,
    color:'#58AB23'
  },
  row:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  logo:{
    height:40,
    width:42,
    alignItems:'center'
  },
    logo2:{
    height:280,
    width:280
  },
  button:{
    padding:11,
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
  buttontext:{
    color:'#FFFFFF',
    fontSize:14,
    fontWeight:'500'
  }
});
