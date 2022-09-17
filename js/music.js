var fs = require('fs');
var path = require('path');
var pth = path.join(__dirname);

function williamns() {
    fs.readdir(`${pth}/music/`, (err, files) => {
        new Audio(files[Math.floor(Math.random() * files.length)]).play();
    })
}
williamns()