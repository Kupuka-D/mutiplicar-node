//Creo este objeto para no repetir en los comandos todo este código
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}


const argv = require('yargs')
    .command('listar', 'Este comando sirve para listar la tabla de multiplicar', opt)
    .command('crear', 'Este comando sirve para crear un archivo txt con una tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}