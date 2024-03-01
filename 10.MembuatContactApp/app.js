const fs = require ('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
//membuat folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//membuat file json jika belum ada
const dataPath ='./data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]', 'utf-8');
}

rl.question('Masukkan Nama Anda : ', (nama)=>{
    rl.question('Masukkan no HP anda : ',(noHP) =>{
        const contact = {nama, noHP};

        //membaca isi file JSON secara asyncron
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

        console.log('Terimaksih sudah memasukkan data.');

        rl.close();
    });
    });
