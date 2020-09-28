import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, CheckBox } from 'react-native';
export default function Candidato() {
    const [isSelected, setSelection] = useState(false);
     const [isSelected2, setSelection2] = useState(false);
      const [isSelected3, setSelection3] = useState(false);
  return(
<View style={styles.container}> 
    <View style= {styles.row}>
    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
    <Text style={styles.candidato}>Me candidato a prefeito!</Text>
        </View>
        <View style= {styles.row}>
         <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
    <Text style={styles.candidato}>Me candidato a vereador!</Text>
     </View>
    <View style= {styles.row}>
     <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
    <Text style={styles.candidato}>Me candidato a fiscal!</Text>
     </View>
     </View>
  )}

  
const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: 'space-around',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
  },
  row:{
        flexDirection: 'row',
  },
  candidato: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    alignItems: 'center'
  },
  checkbox:{
    height:35,
    width:35
  }
});