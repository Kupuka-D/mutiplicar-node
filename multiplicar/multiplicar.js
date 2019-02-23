//Declaro una constante para el require
//Este require es para librerias ya definidas en nodejs por defecto
//la librería fs es la correspondiente al filesystem
const fs = require('fs');
const colors = require('colors');

//Express no es un paquete propio de node, es una extension
//const fs = require('express');

//Ademas podemos hacer require de archivos que nosotros tenemos dentro de nuestro proyecto
//const fs = require('./url');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Los parámetros base y limite deben ser numéricos');
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data = data + `${base} * ${i} = ${base*i}\n`;
        }
        if (!data) {
            reject("Se produjo un error al querer listar")
        } else {
            console.log('===================='.green);
            console.log(`=Tabla de ${base}===`.green);
            console.log('===================='.green);

            resolve(console.log(data));
        }

    })

}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El parametro ${base} o ${limite} no es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} *  ${i} =  ${base*i} \n`;
        }

        //Primer parametro, nombre del archivo destino, sino existe lo crea
        //segundo parametrp los que deseamos escribir en ese archivo
        //tercer parametro callback para saber si se ejecuto bien la instruccion
        fs.writeFile(`Tablas/tabla_${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla_${base}.txt`);
            }

        });

    });

}


//Modulo es un objeto global que nos permite exportar funciones y otra funcionalidades para usarlos en otros archivos
module.exports = {
    crearArchivo,
    listarTabla
}