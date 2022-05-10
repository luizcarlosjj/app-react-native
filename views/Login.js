import AsyncStorage from '@react-native-async-storage/async-storage';  // Grava os dados logados no cache do celular
import React, {useState, useEffect} from 'react';
import { Text, View, KeyboardAvoidingView, Platform, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { css } from '../assets/css/Css';


export default function Login({navigation}){
  // funções de estado
  const [display, setDisplay] = useState('none');
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [imagem, setImagem] = useState(null);

  //Envio do formulário de login pro back
  async function sendForm(){    //ip que o exp da +/login
    let response = await fetch('http://', {               //Envia essa API para a rota /login para ser recebida no back
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({          //Dados a serem passados(user,password)
        name: user,
        password: password,
      })
    });
    let json = await response.text();  // a let json vai coletar a resposta da let response depois de realizada(correta || falha)
    if(json === 'error'){             // se o valor da requisição vinda do back for "failed" :
      setDisplay('flex');             // ele irá setar o valor 'flex'(amostra) para o objeto de texto de usuário errado
      setTimeout(() => {
        setDisplay('none');
      }, 5000);
      await AsyncStorage.clear();        
    }else{
      let userData = await AsyncStorage.setItem('userData', JSON.stringify(json))
      let idadeData = await AsyncStorage.setItem('idadeData', JSON.stringify(json))
      let rgData = await AsyncStorage.setItem('rgData', JSON.stringify(json))
      let sexoData = await AsyncStorage.setItem('sexoData', JSON.stringify(json))
      navigation.navigate('AreaRestrita')
    }
  }


  return(
    <KeyboardAvoidingView style={css.container}>
      <StatusBar backgroundColor="#212121" barStyle="light-content" />
      <Animatable.View animation="fadeInLeft" delay={500} style={css.containerHeader}>
        <Text style={css.message}>Realize o Login e tenha acesso ao nosso Aplicativo.</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={css.containerForm}>
        <Text style={css.title}>Usuário:</Text>
        <TextInput
          style={css.input}
          onChangeText={text=>setUser(text)}
        />

        <Text style={css.title}>Senha:</Text>
        <TextInput
          style={css.input}
          secureTextEntry={true}
          onChangeText={text=>setPassword(text)}
        />

        <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>

        <TouchableOpacity style={css.button} onPress={() => sendForm()}>
          <Text style={css.buttonText}>Acessar</Text>
        </TouchableOpacity>

        {/* Butão sem funcionamento*/}
        <TouchableOpacity style={css.buttonRegister}>
          <Text style={css.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
        
      </Animatable.View>

    </KeyboardAvoidingView>
  )
}