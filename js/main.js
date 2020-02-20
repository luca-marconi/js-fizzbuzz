// Stampo i numeri da 1 a 100
// sostituire il numero divisibile per 3 con Fizz
    // nel ciclo for inserisco una divisione x 3, se il resto è 0, è divisibile.
    // sostituisco il numero divisibile con Fizz
// sostituire il numero divisibile per 3 con Buzz
    // nel ciclo for inserisco una divisione x 5, se il resto è 0, è divisibile.
    // sostituisco il numero divisibile con Buzz
// sostituire il numero divisibile sia x 3 che x 5 e sostituisci con FizzBuzz
    // nel ciclo for inserisco una divisione x 3 e x 5, se il resto è 0, è divisibile.
    // sostituisco il numero divisibile con FizzBuzz


for (var i = 1; i <= 100; i++) {
    var resto1 = i % 3;
    var resto2 = i % 5;

    if ((resto1 == 0) && (resto2 == 0)) {
        console.log('FizzBuzz');
    } else if (resto1 == 0) {
        console.log('Fizz');
    } else if (resto2 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
