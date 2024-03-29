//Enunciado
class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }

    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}

//Ejercicio 1
//Creamos la clase Jugador con sus distintos atributos.
class Jugador {
    constructor(nombre, ocupacion, faccion) {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = 100;
        this.faccion = faccion;
    }

    //El método toString() nos permitirá comprobar los datos del jugador.
    toString() {
        console.log(`Nombre: ${this.nombre}, Ocupación: ${this.ocupacion}, Puntos de vida: ${this.puntosVida}, Facción: ${this.faccion}`)
    }
}

//Creamos un par de jugadores a partir de la clase Jugador.
let jugador1 = new Jugador('Alberto', 'Policía', 'Amarillo');
let jugador2 = new Jugador('Jose', 'Ladrón', 'Rojo');

//Los almacenamos en una lista.
let listaJugadores = [jugador1, jugador2];


//Ejercicio 2
//Creamos una clase Abominación que extienda de la clase Zombi.
class Abominacion extends Zombi {
    //Tendrá un ataque especial que nos permitirá atacar tres veces.
    especial(objetivo) {
        super.atacar(objetivo);
        super.atacar(objetivo);
        super.atacar(objetivo);
    }
}


//Ejercicio 3
class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }

    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}

let manzana = new Consumible('Manzana');
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}

ricardo.consumir(manzana);

//Creamos la clase PlantaCurativa que extiende de Consumible.
class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }

    consumir(jugador) {
        //Llamamos al metodo consumir de la clase Consumible.
        super.consumir(jugador);
    }
}


//Ejercicio 4
let puntuaciones = [
{ nombre: "Pablo", puntuacion: 180 },
{ nombre: "Javier", puntuacion: 270 },
{ nombre: "Raquel", puntuacion: 70 },
{ nombre: "Mario", puntuacion: 310 },
{ nombre: "Miriam", puntuacion: 90 },
{ nombre: "Laura", puntuacion: 210 },
];

/Creamos un array donde guardaremos los jugadores con una puntuación mayor a 100.
let mayorCien = [];
//Iremos añadiendo dichos valores mediante un bucle que recorrerá el tamaño del array.
for (let i = 0; i < puntuaciones.length; i++) {
    let actual = puntuaciones[i];
    if (actual['puntuacion'] > 100) {
        mayorCien.push(actual)
    }
}
//Mostraremos los valores del array ordenados de mayor a menor.
console.log(mayorCien.sort((a,b) => b.puntuacion - a.puntuacion));
