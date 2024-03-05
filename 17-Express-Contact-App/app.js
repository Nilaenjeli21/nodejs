const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const {loadContact, findContact}= require('./utils/contact');

const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs');

//Third-party Middleware
app.use(expressLayouts);

//Built-in middleware
app.use(express.static('public'));



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

app.get('/contact', (req, res) => {
   const contact = loadContact();

    res.render('contact', {
      layout:'layouts/main-layout',
       title :'Halaman Contact',
       contact,
      });
  });
  
app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);

    res.render('detail', {
      layout:'layouts/main-layout',
       title :'Halaman Detail Contact',
       contact,
      });
  });
  
  //menjalankan sebuah midleware
  app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})