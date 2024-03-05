const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  //res.send('Hello World!')
//   res.json({
//     nama : 'Nila Enjeli',
//     email : 'nilaanjeli1904@gmail.com',
//     noHP : '082171743393',
//   })
res.sendFile('./index.html',{root: __dirname});
});
app.get('/about', (req, res) => {
    //res.send('Ini adalah Halaman About!')
    res.sendFile('./about.html',{root: __dirname});

  });
app.get('/contact', (req, res) => {
    //res.send('Ini adalah Halaman Contact!')
    res.sendFile('./contact.html',{root: __dirname});

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