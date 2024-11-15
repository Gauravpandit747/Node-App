const fs = require("fs");

// Read File

// fs.readFile("./README.md", (err, data) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log(data.toString());
//   }
// });
// console.log("Last Line");

// ============================================================

// write file
// fs.writeFile('./test.txt', "Hello John", (err, data) => {
//     if(err) {
//         console.log(err.message)
//     }
// })

// ============================================================
// directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//     console.log("Folder created ...");
//   });
// }

// deleting files

// if (fs.existsSync("./assets")) {
//   fs.unlink("./test.txt", (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log("File Deleted successfully");
//     }
//   });
// }
