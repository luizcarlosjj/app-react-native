const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

//Requisições para uso de modulos
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
let user = models.User;

//Cria a rota post para o /login
app.post('/login', async (req,res)=>{
  let response = await user.findOne({  //findOne
    where:{
      name: req.body.name,             // name no db = objeto name
      password: req.body.password      // password no db = objeto password
    }
  });
  if(response === null){               // condição para exibir error(falho)
    res.send(JSON.stringify('error'))
  }else{
    res.send(response)                 // condição para exibir dados(correto)
  }
});


// Função para ligar o servidor Nodemon na porta 3000
let port = process.env.PORT || 3000;
app.listen(port, (req,res)=>{
  console.log('servidor rodando')
});