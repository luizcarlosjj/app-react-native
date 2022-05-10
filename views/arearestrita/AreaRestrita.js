import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'


export default function AreaRestrita({navigation}){
  const [user,setUser]= useState(null);
  const [idade,setIdade]= useState(null);
  const [imagem,setImagem] = useState(null);

  useEffect(() => {
    async function getUser(){
      let response = await AsyncStorage.getItem('userData')
      let json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  },[])

  //idade:
  useEffect(() => {
    async function getIdade(){
      let response = await AsyncStorage.getItem('idadeData')
      let json = JSON.parse(response);
      setIdade(json.idade);
    }
    getIdade();
  },[])

  //Invocar a imagem do banco de dados: incompleto
  /*useEffect(() => {
    async function getImagem(){
      let responses = await AsyncStorage.getItem('imagemData')
      let json = JSON.parse(responses);
      setImagem(json.imagem)
    }
    getImagem()
  })*/

  return(
      <Animatable.View style={styles.containerPrinc}>
        <View style={styles.imagemPrinc}>
          <Animatable.Image

          />
        </View>

        <Text style={styles.titlePrinc}>Seja bem vindo {user} {idade}</Text>


        <View  style={styles.containerForm}>
          <TouchableOpacity style={styles.buttonAgd}>
            <Text style={styles.agdText}>Agende sua Acessoria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAgd} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.agdText}>Ver meu Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAgd}>
            <Text style={styles.agdText}>Teleatendimento</Text>
          </TouchableOpacity>
        </View>

      </Animatable.View>

    
  )
}
const styles = StyleSheet.create({
containerPrinc: {
  flex: 1,
  backgroundColor: '#004f9e'
},
imagemPrinc:{
  justifyContent: 'center',
  alignItems: 'center',

},
titlePrinc:{
  fontSize: 28,
  fontWeight: 'bold',
  marginTop: 25,
  marginBottom: 12,
  color: '#fff',
  textAlign: 'center',
  padding: '5%'
},
containerForm:{
  flex: 1,
  backgroundColor: '#fff',
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
  paddingStart: '10%',
  paddingEnd: '10%',
  paddingTop: '10%'
},
buttonAgd:{
  backgroundColor: '#004f9e',
  padding: '10%',
  borderRadius: 50,
  paddingVertical: 8,
  width: '70%',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '10%'
},
agdText:{
  fontSize: 18,
  color: '#fff',
  fontWeight: 'bold',
},
})