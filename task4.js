var mymodule = require('./node.js');
var directory = process.argv[2]  
var extension = process.argv[3];
mymodule(directory, extension, (err, files) => {
    if (err) {
        return console.error(err);
    }
    files.forEach((file) => {
        console.log(file);
    });
});