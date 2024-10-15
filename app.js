//Procedimento:
// Scrivivere un programma che stampi i numeri da 1 a 100,
//   SE multipli di 3 stampare la stringa “Fizz” al posto del numero 
//      ALTRIMENTI SE multipli di 5 stampare la stringa "Buzz". 
//           ALTRIMENTI per i numeri che sono sia multipli di 3 che di 5 stampare la stringa "FizzBuzz".



//Stampare i numeri da 1 a 100:

for (i = 0; i < 100; i++) {

    let num = i + 1
    // console.log(num)

    const resto3 = num % 3
    const resto5 = num % 5


    if (resto3 === 0) {
        console.log('Fizz') //Se multipli di 3, stampare la stringa 'FIZZ'
    }
    else if (resto5 === 0) {
        console.log('Buzz') //Se multipli di 5, stampare la stringa 'BUZZ'
    }

    else (`${resto3 === 0} && ${resto5 === 0}`); {
        console.log('FizzBuzz') //Se multipli di entrambi, stampare la stringa 'BUZZ-FIZZ'
    }


}






