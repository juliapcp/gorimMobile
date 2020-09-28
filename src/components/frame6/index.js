import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Comecar from './comecar'

export default function Frame6( {navigation} ) {
  return (
    <View style={styles.container}>
   <View style= {styles.self}>
    <Image style={styles.logo} source={require('../../assets/Logo/Votar.png')}/>
    <Text style= {styles.title}>Eleições em {"\n"} localização </Text>
    </View>
    <ScrollView>
    <Text style= {styles.texto}> Vote em um candidato à prefeito: </Text>
    <View style= {styles.row}>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado} />
        <View style={styles.quadrado} />
      </View>
          <View style= {styles.item}>
        <View style={styles.quadrado}/>
      </View>
      <Text style= {styles.texto}> Vote em um candidato à vereador: </Text>
       <View style= {styles.row}>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado} />
      </View>
          <View style= {styles.item}>
        <View style={styles.quadrado}/>
      </View>
      <Text style= {styles.texto}> Vote em um candidato à fiscal: </Text>
       <View style= {styles.row}>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado}/>
      </View>
          <View style= {styles.item}>
        <View style={styles.quadrado}/>
      </View>
      <TouchableOpacity
        style={styles.button}
         onPress= {() => navigation.navigate('frame7')}
        >
        <Text style= {styles.buttontexto}>VOTAR</Text>
    </TouchableOpacity>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: 10,
  },
  self:{
    flexDirection: 'row',
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    alignSelf: 'flex-start'
  },
  title: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 22,
    alignItems: 'center'
  },
  logo:{
  width: 45,
  height: 45
  },
  texto: {
        fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 49,
    alignItems: 'center'
  },
  quadrado: {
    margin: 3, width: 88, height: 80, backgroundColor: '#fff', borderRadius: 20, shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
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
  buttontexto:{
    color:'#FFFFFF',
    fontSize:14,
    fontWeight:'500'
  }
});