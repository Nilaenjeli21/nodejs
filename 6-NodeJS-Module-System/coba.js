//function
function cetakNama(nama){
    return `Halo, nama saya ${nama}`;
}
//variabel
const PI = 3.14; 


//Object
    //properti
    const mahasiswa ={
        nama : 'Nila Enjeli',
        umur : 20,
    //Method
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur}tahun.`;
    },
    };
//Class
class Orang{
    constructor(){
        console.log('Object orang sudah dibuat!!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;
///////////////////
// module.exports = {
//     cetakNama: cetakNama,
//     PI : PI,
//     mahasiswa: this.mahasiswa,
//     Orang:Orang,
// };

//////////////////
module.exports = {cetakNama, PI, mahasiswa, Orang};

