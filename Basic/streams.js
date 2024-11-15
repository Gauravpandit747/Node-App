const fs = require('fs');

const readStream = fs.createReadStream('./docs/test.txt', {encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/write.txt', {encoding:'utf-8'});
// readStream.on('data', (chunk) => {
//     // console.log("::::::::::::::::  NEW CHUNK  :::::::::::::::::::::::");
//     // console.log(chunk);
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);




