import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'


export default function Perfil({navigation}){
  const [user,setUser]= useState(null);
  const [idade,setIdade]= useState(null);
  const [sexo,setSexo]= useState(null);
  const [rg,setRg]= useState(null);
  const [imagem,setImagem] = useState(null);

  useEffect(() => {
    async function getUser(){
      let response = await AsyncStorage.getItem('userData')
      let json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  },[])

  //Idade
  useEffect(() => {
    async function getIdade(){
      let response = await AsyncStorage.getItem('idadeData')
      let json = JSON.parse(response);
      setIdade(json.idade);
    }
    getIdade();
  },[])

  //Rg
  useEffect(() => {
    async function getRg(){
      let response = await AsyncStorage.getItem('rgData')
      let json = JSON.parse(response);
      setRg(json.rg);
    }
    getRg();
  },[])

  //sexo:
  useEffect(() => {
    async function getSexo(){
      let response = await AsyncStorage.getItem('sexoData')
      let json = JSON.parse(response);
      setSexo(json.sexo);
    }
    getSexo();
  },[])
  return(

    <Animatable.View style={styles.containerPrinc}>
        <View style={styles.Header}>
          <Image style={styles.imagemFace} source={require('../assets/img/myface.jpg')} />
          <View style={styles.dataHeader}>
            <Text style={styles.titlePrinc}>Nome: {user}</Text>
            <Text style={styles.titlePrinc}>Idade: {idade}</Text>
            <Text style={styles.titlePrinc}>Sexo: {sexo}</Text>
            <Text style={styles.titlePrinc}>Rg: {rg}</Text>
          </View>
        </View>

        <View style={styles.Separetor}>
          <Text style={styles.SeparetorText}>Históricos</Text>
        </View>

        <View style={styles.Hist}>
          <View style={styles.dataHist}>
            <Text style={styles.titlePrinc}>Última consulta: </Text>
            <Text style={styles.titlePrinc}>Quantas vezes você nos visitou:</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('AreaRestrita')}>
          <Text>Voltar</Text>
        </TouchableOpacity>

      </Animatable.View>
    
  )
}
const styles = StyleSheet.create({
containerPrinc: {
  flex: 1,
  backgroundColor: '#004f9e'
},
Header:{
  flexDirection: 'row',
},
dataHeader:{
  flexDirection: 'column',
  padding: '10%'
},
titlePrinc:{
  fontSize: 21,
  fontWeight: 'bold',
  color: '#fff',
  paddingBottom: '2%'
},
imagemFace:{
  width: 150,
  height: 200,
  resizeMode: 'contain',
  borderRadius: 70
},
Separetor:{
  backgroundColor: '#fff',
  marginTop: '5%'
},
SeparetorText:{
  fontSize: 21,
  padding: '2%',
  fontWeight: 'bold',
  color: '#004f9e',
  alignItems: 'center',
  textAlign: 'center'
},
Hist:{
  flexDirection: 'row',
},
dataHist:{
  flexDirection: 'column',
  padding: '10%'
},
Button:{
  position: 'absolute',
  backgroundColor: '#fff',
  borderRadius: 50,
  paddingVertical: 8,
  width: '60%',
  alignSelf: 'center',
  bottom: '15%',
  alignItems: 'center',
  justifyContent: 'center'
}
})