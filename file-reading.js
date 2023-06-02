const fs = require('fs');

//File system - Reading File
fs.readdir('./' , (err, content) => {
    if(err) return err;
    console.log(content);
});

fs.readFile('global.html', 'UTF-8', (err, content) => {
    console.log(content);
});
// ---------------------------------------------