//Core Module
//file System
const fs = require ('fs');



//menuliskan string ke file (syncronous)
// try{
//     fs.writeFileSync('data/test.txt', 'Hello World secara Syncronous!');
// }catch(err){
//     console.log(e);
// }
//////////////////////
//menuliskan string ke file (asyncronous)
// fs.writeFile('data/test.txt', 'Hello World secara Asyncronous', (e) =>{
//     console.log(e);
// });

//membaca isi file(syncronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

//membaca isi file(Asyncronous)
// fs.readFile('data/test.txt', 'utf-8',(err, data)=>{
//     if(err) throw err;
//     console.log(data)
// });
//Readline
const readline = require('node:readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question('Masukkan Nama Anda : ', (nama)=>{
    rl.question('Masukkan no HP anda : ',(noHP) =>{
        const contact = {nama, noHP};

        //membaca isi file JSON secara asyncron
        const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

        console.log('Terimaksih sudah memasukkan data.');

        rl.close();
    });
    });
