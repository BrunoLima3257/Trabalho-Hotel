/* criando evento do botão */
document.getElementById('botaoEntrar')
    .addEventListener('click', (e) => {
        e.preventDefault();
    });

    document.getElementById('botaoCadastro')
    .addEventListener('click',(e)=>{
        e.preventDefault();
        window.open("../assets/cadastroUsuario.html");
        window.close();
    });

function verifica() {
    //pegando os valores do input email e senha
    let email = document.getElementById('username').value;
    let senha = document.getElementById('password').value;

    if (email == "" || senha == "") {
        alert("Obrigatório o preenchimento do email e senha")
        document.getElementById('username').focus();
    } else {
        consultar(email, senha)


    };
};

function consultar(email, senha) {
    let usuarios = new Array();

    //verificando se a chave usuarios existe no localStorage
    if (localStorage.hasOwnProperty('usuarios')) {
        //recuperar os valores da propriedade usuaarios do localStorage
        //convertendo o usuarios em objeto para podermos usar as propriedades

        usuarios = JSON.parse(localStorage.getItem('usuarios'))


    }

    for (let i = 0; i < usuarios.length; i++) {
        if (usuario[i].email == email && usuarios[í].senha == senha) {
            window.open("../assets/index.html");
            window.close();
            break;
        }
    }
    alert("email ou senha invalido");
    document.getElementById('username').focus()

}































