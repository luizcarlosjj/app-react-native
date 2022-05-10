import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#212121',
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 20
  },
  containerForm:{
    backgroundColor: '#777777',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: '5%',
    paddingBottom: '10%',
    paddingStart: '10%',
    paddingEnd: '10%',
    marginTop: '20%',
  },
  title:{
    fontSize: 20,
    marginTop: 28,
    color: '#fff'
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: '#fff',
  },
  button:{
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText:{
    color: "#d2d2d2"
  },
  login__msg:(text='none')=>({
    fontWeight: 'bold',
    fontSize: 22,
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
    display: text
  }),
  containerPrinc:{
    flex: 1,
    backgroundColor: '#d1d1d1',    
  },
  titlePrinc:{
    fontSize: 20,
    marginTop: 28
  }
});

export {css};