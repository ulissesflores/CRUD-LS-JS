function validarFormulario()
{
    var nome = document.forms["formularioPF"]["nome"];
    var endereco = document.forms["formularioPF"]["endereco"];
    var email = document.forms["formularioPF"]["email"];
    var celular = document.forms["formularioPF"]["celular"];

    if (nome.value == "")
    {
        window.alert("Por favor, insira seu nome.");
        nome.focus();
        return false;
    }

    if (endereco.value == "")
    {
        window.alert("Por favor, insira seu endereço.");
        endereco.focus();
        return false;
    }

    if (email.value == "")
    {
        window.alert("Por favor, insira seu e-mail.");
        email.focus();
        return false;
    }

    if (celular.value == "")
    {
        window.alert("Por favor, insira seu celular.");
        celular.focus();
        return false;
    }

    return true;
}



