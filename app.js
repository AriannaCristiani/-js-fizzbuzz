//Procedimento:
// Scrivivere un programma che stampi i numeri da 1 a 100,
//   SE i numeri sono sia multipli di 3 che di 5: 
//     -stampare la stringa "FizzBuzz".
//   ALTRIMENTI SE multipli di 3:
//     -stampare la stringa “Fizz” al posto del numero 
//   ALTRIMENTI SE multipli di 5:
//     -stampare la stringa "Buzz". 
//   ALTRIMENTI:
//     -stampa il numero       


//Esercizio:

for (i = 0; i < 100; i++) {

    let num = i + 1
    // console.log(num)

    const resto3 = num % 3 === 0
    const resto5 = num % 5 === 0

    let message = '' + num


    if (resto3 && resto5) {
        message = 'FizzBuzz'
    } else if (resto3) {
        message = 'Fizz'
    } else if (resto5) {
        message = 'Buzz'
    }else {
        message = '' + num
    }

    console.log (message)
}






