// const http = require('http'); 

// const sever = http.createServer((req, res) => {

//     const url = req.url;
//     if(url === '/product'){
//         console.log('Product')
//     } else {
//         console.log(' Home')
//     }
// });

// const PORT = 3001;
// sever.listen(PORT, () => {
//     console.log(`Sever running port ${PORT}`);
// });

//
const http = require('http'); 

const sever = http.createServer((req, res) => {

    const url = req.url;
    if(url === '/product'){
       res.setHeader('content-Type','text/html');
       res.write("<html>");
       res.write("<body>");
            res.write("<h1> Home page</h1>");
       res.write("<body>");
       res.write("<html>");
    } else {
       res.write("<html>");
       res.write("<body>");
            res.write("<h1> Home page new</h1>");
       res.write("<body>");
       res.write("<html>");
       res.end();
    }
});
console.log('ahii');
const PORT = 3001;
sever.listen(PORT, () => {
    console.log(`Sever running port ${PORT}`);
});