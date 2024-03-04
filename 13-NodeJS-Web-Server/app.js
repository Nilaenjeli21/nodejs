const http = require('http');
const fs = require('fs');
const port = 3000;


http
.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html',
    });

    const url = req.url;
   if( url === '/about'){
    res.write('<h1>Ini Adalah Halaman About</h1>');
    res.end();
   }else if(url === '/contact'){
    res.write('<h1>Ini Adalah Halaman Contact</h1>');
    res.end();
   }else{
    //res.write('Hello World!');

    fs.readFile('./index.html', (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('Error: file not found');
        } else{
            res.write(data);
        }
        res.end();
    });
   }  
})
.listen(port,() => {
    console.log(`Server is listening on ${port}..`)
});