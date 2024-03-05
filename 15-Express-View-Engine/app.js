const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.get('/', (req, res,) => {
 
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
app.get('/about', (req, res) => {
    //res.send('Ini adalah Halaman About!')
    res.render('about', {
      layout:'layouts/main-layout',
       title :'Halaman About',
      });
  });
app.get('/contact', (req, res) => {
    //res.send('Ini adalah Halaman Contact!')
    res.render('contact', {
      layout:'layouts/main-layout',
       title :'Halaman Contact',
      });
  });
  app.get('/product/:id/category/:idCat', (req, res) => {
    res.send(`Product ID: ${req.params.id}\nCategory ID: ${req.query.category}`);
});

  //menjalankan sebuah midleware
  app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})