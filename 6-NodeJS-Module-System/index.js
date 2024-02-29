// const fs = require('fs');//core module
// const cetakNama = require('./coba');//local module
// const moment = require('moment');//third party module/nmpm module/node_module


//console.log('Hello WPU');
// const PI =require('./coba');
// console.log(PI);
//console.log(cetakNama('Nila'), PI);

const coba = require('./coba');
console.log(
    coba.cetakNama('Nila'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
    );

