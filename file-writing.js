const fs = require ("fs");

//File system- Writing (it helps creating new file).  
//It takes three parameters: the file name, the data to be written, and a callback function to handle errors.
fs.writeFile('./modules/data.html', 'Hey, this file was born today only. \n', 'utf8',  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File born successfully.');
    }
  });


//fs.appendFile() method. 
//It takes three parameters: the file name, the data to be appended, and a callback function to handle errors.
  fs.appendFile('./modules/data.html', 'Please be kind to him. Thankyou!', 'utf8',  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data appended successfuly.');
    }
  });