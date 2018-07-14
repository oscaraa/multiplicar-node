//HAY 3 TIPOS DE REQUIRE
//EL QUE IMPORTA LOS PAQUETES NATIVOS
//EL QUE IMPORTA LOS PAQUETES NO NATIVOS
//EL QUE IMPORTA LOS ARCHIVOS QUE NOSOTROS CREAMOS DENTRO DEL PROYECTO
//
//const fs = require('fs');
//

const argv = require('./config/yargs').argv;
const colors = require('colors')

const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar.js');


let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.hasta)
            .then(tabla => console.log(`El contenido del archivo es \n ${tabla}`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base,argv.hasta)
            .then(archivo => console.log('Archivo creado: ',colors.green(`${archivo}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('No se');    
}














//let argv2 = process.argv;
//console.log(argv.hasta);

//
//for(let i = 1;i<11;i++){
//   data += ` ${ base } * ${i} = ${base * i} \n`;
//}
//
//fs.writeFile(`tablas/TABLA-${base}.txt`, data, (err) => {
//  if (err) throw err;
//  console.log(`La tabla de base ${base} fue creada`);
//});

//console.log(process.argv);

