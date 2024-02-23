const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
  
    return valueInDollar;
}
console.log(fromEuroToDollar(1))

// lo de arriba esta bien ahora por Yen


const fromDollarToYen  = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueinyen = (valueInDollar/oneEuroIs["USD"]) * oneEuroIs["JPY"];
    // Retornamos el valor en yen
  
    return valueinyen;
}
console.log(fromDollarToYen(1))

// lo de arriba esta bien ahora por Pound

const fromYenToPound  = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueinPound = (valueInYen/oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    // Retornamos el valor en pound
  
    return valueinPound;
}
console.log(fromYenToPound(150))





//aqui se añade la funcion para comprobar 
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound }