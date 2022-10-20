function consultaEndereco(){
    let cep = document.querySelector('#cep').value;

    if(cep.length !== 8){
        alert('CEP INVALIDO!');
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json`;

    fetch(url).then(function(response){
        response.json().then(mostrarEndereco);
    });
    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
        })
    })
}
function mostrarEndereco(dados){
    let resultado = document.querySelector('#resultado');
    if(dados.erro){
        resultado.innerHTML = "endereço não encontrado!";
    } else {
        resultado.innerHTML = `<p>endereço: ${dados.logradouro}<p>
                                <p>ddd: ${dados.ddd}<p>
                                <p>Bairro> ${dados.bairro}<p>
                                <p>Cidade: ${dados.localidade} - ${dados.uf}<p>`
    }                                   
}