const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const {loadContact, findContact, addContact,cekDuplikat }= require('./utils/contact');
const {body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts); //third party middleware
app.use(express.static('public')); //built-in middleware
app.use(express.urlencoded({extended: true }));

//konfigurasi flash
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: {maxAge: 6000},
    secret:'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());


// //Third-party Middleware
// app.use(expressLayouts);

// //Built-in middleware
// app.use(express.static('public'));



app.get('/', (req, res) => {
 
//res.sendFile('./index.html',{root: __dirname});
const mahasiswa = [
  {
    nama : 'Nila Enjeli',
    email : 'nilaanjeli1904@gmail.com',
  },
  {
    nama : 'Meri',
    email : 'meri@gmail.com',
  },
  {
    nama : 'Puput',
    email : 'putri@gmail.com',
  }
]

res.render('index',{ 
  nama: 'Nila Enjeli',
  title :'Halaman Home',
  mahasiswa,
  layout: 'layouts/main-layout',
});
});
app.get('/about', (req, res, next) => {
  const contacts = loadContact();
  console.log(contacts);
    
    res.render('about', {
      layout:'layouts/main-layout',
       title :'Halaman About',
      });
  });

  //halaman form tambah data contact
app.get('/contact/add', (req, res) => {
  res.render('add-contact',{
   title: 'Form Tambah Data Contact',
   layout: 'layouts/main-layout',
  });
 });

 //Halaman Detail Contact
app.get('/contact/:nama', (req, res) => {
 const contact = findContact(req.params.nama);

   res.render('detail', {
     layout:'layouts/main-layout',
      title :'Halaman Detail Contact',
      contact,
     });
 });
 
//Halaman form tambah data contact

app.get('/contact', (req, res) => {
  const contacts = loadContact();

  res.render('contact', {
    title : 'Halaman Contact',
    layout: 'layouts/main-layout',
    contacts,
    msg:req.flash('msg'),
  });
});
//proses data contact

app.post('/contact', [
  body('nama').custom((value) => {
    const duplikat = cekDuplikat(value);
    if(duplikat){
      throw new Error('Nama contact sudah digunakan!');
    }
    return true;
  }),
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No HP tidak valid').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //return res.status(400).json({ errors: errors.array() });
  res.render('add-contact',{
    title: 'Form Tambah Data Coontact',
    layout: 'layouts/main-layout',
    errors: errors.array(),
  });
  }else{
    addContact(req.body);
    
    //kirimkan flash message
    req.flash('msg', 'Data contact berhasil ditambahkan!');
    res.redirect('/contact');
  }
  //addContact(req.body);
  //res.redirect('/contact');
});


  //menjalankan sebuah midleware
  app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})