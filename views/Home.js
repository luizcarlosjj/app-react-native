import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Home({navigation}){

  return(
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../assets/img/logo.png')}
          style={{ width: '100%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Realize pedidos techs e saia Realizado da melhor forma!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
    color: '#222222'
  },
  text:{
    color: '#a1a1a1'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#222222',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})