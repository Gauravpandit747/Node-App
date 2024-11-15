const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    const no = _.random(0,200);
    // res.setHeaders('Content-Type','text/html');
    res.write("Hello" + "  " + no.toString());
    res.end();
});


server.listen(3000, 'localhost', ()=>{
    console.log('connected on port 3000');
});





