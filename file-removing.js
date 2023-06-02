const fs = require ("fs");

try {
    fs.unlinkSync('./modules/fs-remove.html');
} catch (err) {
    console.log(err + 'here is the error');
}