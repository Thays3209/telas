import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Fot from './assets/foto.png' ;


export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo1} >Cadê Minha Casa?</Text>
      <Text style={styles.linha} >___________________________________</Text>
      <Text style={styles.titulo2} >O que fazemos?</Text>
      <Text style={styles.text} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </Text>
      <Text style={styles.linha} >___________________________________</Text>
      <Text style={styles.titulo2} >Como?</Text>
      <Text style={styles.text} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </Text>
      <Text style={styles.linha} >___________________________________</Text>
      <Text style={styles.titulo2} >O que queremos?</Text>
      <Text style={styles.text} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </Text>
      <Text style={styles.linha} >___________________________________</Text>
      <Text style={styles.titulo1} >Quem somos?</Text>

      <Text style={styles.titulo1} >Fotoo</Text>
      <Fot width="100%" height="160" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#FFFFFFs',
    alignItems: 'center',
    fontFamily:'Montserrat',
    fontStyle: 'normal',
    //justifyContent: 'center',
  },
  titulo1: {
    fontSize: '20px',
    width:'100vw',
    padding:'0px',
    marginTop: '10vw',
    textAlign: 'center',
    fontweight: 'bold',
    
  },

  linha:{
    color:'#d3d3d3',
    width:'80vw'

  },

  titulo2: {
    marginTop: '8vw',
    fontweight: 'bold',
  },

  text: {

    marginTop: '5vw',
    width:'80vw',
    textAlign: 'center',
  },

  img: {
    fontSize: '50px',
    width:'80vw'
  }


});
