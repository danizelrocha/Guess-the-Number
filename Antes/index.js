let computerNumber
let userNumbers =[]
let= tentativa = 0
let maxguesses = 10

function init() {
   computerNumber = Math.floor(Math.random() * 100 +1)
   console.log(computerNumber)    
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if(tentativa < maxguesses) {

        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é Maior.'
            document.getElementById('inputBox').value = ''
            tentativa++
            document.getElementById('tentativa').innerHTML = tentativa
            }
            else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é Menor.'
            document.getElementById('inputBox').value = ''
            tentativa++
            document.getElementById('tentativa').innerHTML = tentativa
            }
            else {
            document.getElementById('textOutput').innerHTML = 'Acertou Miserável :)'
            tentativa++
            document.getElementById('tentativa').innerHTML = tentativa
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Você perdeu :( ! O número do computador é ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }

}