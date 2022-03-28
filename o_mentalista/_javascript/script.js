    var numero_gerado = parseInt (Math.random () * 11)
    var tentativas = 3
    document.getElementById("tentativa").innerHTML = "Você tem " + tentativas + " tentativas!"

function chutar()
{
    var chute = parseInt (document.getElementById("numero_digitado").value)

    while(tentativas > 0) 
    {
        if (chute == numero_gerado)
        {
            document.getElementById("resposta").innerHTML = "Você acertou o número, parabéns!"
            break
        }
        else if (chute < 0 || chute > 10)
        {
            alert("Você deve digitar um número entre 0 e 10.")
            break
        }
        else if (chute > numero_gerado)
        {
            document.getElementById("resposta").innerHTML = "Você errou, o número sorteado é menor. Tente novamente!"
            tentativas--
            document.getElementById("tentativa").innerHTML = "Você tem " + tentativas + " tentativas!"
            break
        }
        else if (chute < numero_gerado)
        {
            document.getElementById("resposta").innerHTML = "Você errou, o número sorteado é maior. Tente novamente!"
            tentativas--
            document.getElementById("tentativa").innerHTML = "Você tem " + tentativas + " tentativas!"
            break
        }
    }
    if (tentativas == 0)
    {
        document.getElementById("resposta").innerHTML = "Suas tentativas acabaram, o número era " + numero_gerado
    }
}