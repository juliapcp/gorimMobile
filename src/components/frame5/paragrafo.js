import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Paragrafo() {
  return (
    <View style= {styles.container}> 
    <Text style= {styles.paragrafo}> Antes de começar, a cidade de Atlantis precisa de representantes e reguladores que serão responsáveis por gerir os recursos públicos em busca de alinhar lucro e meio ambiente. Você pode se candidatar à estes cargos e, logo, haverá uma votação para eleger os líderes da cidade! </Text>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    marginEnd:15,
    marginStart: 15,
    marginTop: 10
  },
  paragrafo:{
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 33,
    alignSelf: 'center',
  }
});