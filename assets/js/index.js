//punto1

function calculoSumaEdad() {
    let edad = document.getElementById("edad").value
    let total = 0
    for (let conteo_edad = 1; conteo_edad <= edad; conteo_edad++) {
        total = total + conteo_edad

    }

    document.getElementById("resultadoConteo").innerHTML = `${total}`
}


//punto 2


function clasificarNumero() {
    let numeroIngresado = document.getElementById("numeroIngresado").value
    if (numeroIngresado % 2 === 0) {
        document.getElementById("resultadoCaculo").innerHTML = `${"par"}`
    } else {
        document.getElementById("resultadoCaculo").innerHTML = `${"impar"}`
    }

}

//punto 3



function calcularPremio() {

    let edad = document.getElementById("edad").value
    let sexo = document.getElementById("sexo").value

    if (edad <= 10 && sexo === "hombre") {
        document.getElementById("resultadoPremio").innerHTML = `${"Felicitaciones, has ganado un jugo"}`

    } else if (edad >= 18 && sexo === "hombre") {
        document.getElementById("resultadoPremio").innerHTML = `${"Felicitaciones, has ganado una cerveza y una pizza tres carnes"}`
    } else if (edad > 18 && sexo === "mujer") {
        document.getElementById("resultadoPremio").innerHTML = `${" Felicitaciones, has ganado una cerveza y una pizza tres carnes"}`
    } else {
        document.getElementById("resultadoPremio").innerHTML = `${" En esta ocasión no has ganado un premio"}`
    }
}

//punto 6

/*Validar cual es el valor de matrícula (1’000.000) que debe pagar un estudiante, teniendo en cuenta que:

Si el promedio fue menor a 3 no se le descuenta nada.
Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
Cuando el promedio sea mayor que 4, se le descuenta 50%*/



function calculoDescuento (){
    
    let promedio = document.getElementById("promedio").value
    let porcentaje5 = 5
    let porcentaje50 = 50
    let valorMatricula = 1000000
    
    if (promedio >=3.1 && promedio <=4.0 ){
    let descuento = (porcentaje5*valorMatricula)/100
    let resultado = (valorMatricula-descuento)
    console.log(resultado)
    document.getElementById("resultadoMatricula").innerHTML = `${resultado}`
    
    }else if (promedio >=4.1 && promedio <=5.0 ){
        let descuento = (porcentaje50*valorMatricula)/100
        let resultado = (valorMatricula-descuento)
        console.log(resultado)
        document.getElementById("resultadoMatricula").innerHTML = `${resultado}`
        }
}







