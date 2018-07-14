const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite = 10) => {
    
    
    let data = '';
    return new Promise( (resolve,reject) => {
        if(!Number(base)){
                reject(`La base ${base} no es un numero`);
                return
            }
        if(!Number(limite)){
                reject(`El limite ${limite} no es un numero`);
                return
            }
        
        console.log('============================'.green)
        console.log(`=====tabla de ${base}=======`.green)
        console.log('============================'.green)
        
        for(let i = 1;i<=limite;i++){
               data += ` ${ base } * ${i} = ${base * i} \n`;
        }
        resolve(data);
    });
}


let crearArchivo = (base,limite = 10) => {
        let data = '';
    
        return new Promise((resolve,reject)=>{
            
            if(!Number(base)){
                reject(`La base ${base} no es un numero`);
                return
            }
            
            for(let i = 1;i<=limite;i++){
               data += ` ${ base } * ${i} = ${base * i} \n`;
            }

            fs.writeFile(`tablas/TABLA-${base}.txt`, data, (err) => {
              if (err) reject(err);
              resolve(`TABLA-${base}.txt`);
            });

        });
}

module.exports = {
    crearArchivo,
    listarTabla
}