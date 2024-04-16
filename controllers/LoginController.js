//Importando a classe
const loginModel = require('../models/LoginModel')
//Instanciando a classe
const login = new loginModel()
//Acessando o método e armazenando o retorno na variável
const logged = login.isLogged()

//exibe o texto na tela
exports.getLogin = ((req, res) => {
    res.send(`<h1>${logged}</h1>`)
})

//renderiza o conteúdo da variável logged na view LoginView
exports.getIsLogged = ((req, res)=> {
    res.render("LoginView", {logged : logged});
  });


