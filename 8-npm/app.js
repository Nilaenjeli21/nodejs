const validator = require('validator');
const chalk = require('chalk');
//console.log(validator.isEmail('nilaanjeli@1904.gmail.com'));
//console.log(validator.isMobilePhone('082171743393', 'id-ID'));
//console.log(validator.isNumeric('082171743393'));

//console.log(chalk.italic.bgBlue.black('Hello World'));
const nama = 'Nila Enjeli';
const pesan = chalk`Lorem, ipsum dolor {bgRed.black.bold sit amet} {bgGreen.italic.black adipisicing} elit. Nama saya: ${nama}`;
console.log(chalk.bgRed.black(pesan));
