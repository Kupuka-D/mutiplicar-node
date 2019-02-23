//Para pasar los parametros en este archivo desde la terminal lo que tenemos que haceres
//al ejecutarlo pasarle por parametro un numero de base ej: "node app --base=unNumero"




//Acá importamos el paquete yargs
//1° arg nom del param, 2° mens de ayuda, 3° comand base requerido, 4°limite not send lim=10. 
//Esto se ejecuta si le pasamos el param listar por consola, sino no se ejecuta nada
const { argv } = require('./config/yargs')
    //Otra manera de importar sería haciendo
    //const argv = require('./config/yargs').argv


//Este paquete es el npm colors sirve para darle colores a la consola
const colors = require('colors');


//Aqui podemos usar destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

//Cuando enviamos comandos por la consola los comando que no tienen clave valor como listar, en el ej de arriba se almacenan
//en un arreglo, para acceder a este usamos la instrucción de abajo

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Comando crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        console.log('comando listar');
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no encontrado');
}



//Un objeto global de node es process
//console.log(process.argv);
//Con "argv" le decimos al objeto process que nos muestre la ubicacion de node y la ubicacion del fichero desde donde lo estamos invocando
// let argv2 = process.argv;
// console.log('base', argv.base);
console.log(argv);