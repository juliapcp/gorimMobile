import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Comecar from './comecar'
export default function Frame7() {
  return (
    <View style={styles.container}>
    <ScrollView> 
   <View style= {styles.self}>
    <Image style={styles.logo} source={require('../../assets/Logo/Votar.png')}/>
    <Text style= {styles.title}>Eleições em {"\n"} localização </Text>
    </View> 
    <Text style= {styles.texto}> Resultados: </Text>
    <Text style= {styles.texto}>Escolhido como prefeito com x votos: </Text>
    <View style= {styles.row}>
        <Image style={styles.person} source={require('../../assets/perfils/empresariox2/empresario.png')} />
      </View>
      <Text style= {styles.self2}>Joao </Text>
      <Text style= {styles.texto}>Escolhido como vereador com x votos: </Text>
           <View style= {styles.row}>
        <Image style={styles.person} source={require('../../assets/perfils/empresariox2/empresario.png')} />
      </View>
       <Text style= {styles.self2}>Joao </Text>
      <Text style= {styles.texto}>Escolhido como fiscal com x votos: </Text>
          <View style= {styles.row}>
        <Image style={styles.person} source={require('../../assets/perfils/empresariox2/empresario.png')} />
      </View>
       <Text style= {styles.self2}>Joao </Text>
      <Comecar/>
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
  row: {
    flexDirection: 'row',
  },
    self: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
    self2: {
    alignSelf: 'center',
    marginRight: 26
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
    person:{
  width: 107,
  height: 120,
  borderRadius: 20,
  marginLeft: 63
  },
  texto: {
        fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 49,
    alignItems: 'center'
  }
});