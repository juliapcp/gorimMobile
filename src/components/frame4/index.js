import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';


export default function Frame4({ navigation }) {
  const [value, onChangeText] = React.useState('Adicione uma informação');
  return (
     <View style={styles.container}>
    <Text style={styles.header}> Gorim </Text>
    <Text style={styles.subheader}> Sobre você </Text>
    <View style={styles.absolute}>
    <Image  style={styles.logo} source={require('../../assets/Empresario.png')}/>
    </View>
    <ScrollView>
    <View style={styles.row}>
    <Image  style={styles.simbolo} source={require('../../assets/simbolos/mala.png')}/>
    <View>
    <Text style={styles.superior}> Profissão</Text>
    <Text style={styles.inferior}> Profissão</Text>
    </View>
    </View>
     <View style={styles.row}>
    <Image  style={styles.simbolo} source={require('../../assets/simbolos/mapa.png')}/>
    <View>
    <Text style={styles.superior}> Localização</Text>
    <Text style={styles.inferior}> Localização</Text>
    </View>
    </View>
     <View style={styles.row}>
    <Image  style={styles.simbolo} source={require('../../assets/simbolos/nome.png')}/>
    <View>
    <Text style={styles.superior}> Nome</Text>
    <TextInput
    style= {styles.input}
      onChangeText={text => onChangeText(text)}
      value={value.name}
      backgroundColor= '#EBFFFD'
      placeholder='Digite seu nome'
    />
    </View>
    </View>
     <View style={styles.row}>
    <Image  style={styles.simbolo} source={require('../../assets/simbolos/dislike.png')}/>
    <View>
    <Text style={styles.superior}> Fraquezas</Text>
    <Text style={styles.inferior}> Fraquezas</Text>
    </View>
    </View>
     <View style={styles.row}>
    <Image  style={styles.simbolo} source={require('../../assets/simbolos/carta.png')}/>
    <View>
    <Text style={styles.superior}> Mais sobre você</Text>
    <TextInput
    style= {styles.input}
      onChangeText={text => onChangeText(text)}
      value={value.sobre}
      backgroundColor= '#EBFFFD'
      placeholder='Escreva sore você'
    />
    </View>
    </View>
        <TouchableOpacity
        style={styles.button}
        onPress= {() => navigation.navigate('frame5')}
        >
        <Text style= {styles.texto}>CONTINUAR</Text>
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
    padding: 11,
  },
  input:{
    height: 30,
    marginRight: 2,
    fontSize: 15,
    color:'#A1A1A1',
  },
  row:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: 14,
  },
  absolute:{
    position: 'absolute'
  },
  header: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center'
  },
  subheader:{
    fontFamily: 'Rubik',
    lineHeight: 49,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 24,
    alignItems: 'center' 
  },
  logo:{
  width: 95,
  height: 95,
  borderRadius: 10
  },
  simbolo:{
    width: 45,
    height: 45
  },
  superior:{
    fontSize: 15,
    marginLeft: 8
  },
  inferior: {
    fontSize: 20,
    marginLeft: 8,
    fontWeight: 'bold'
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