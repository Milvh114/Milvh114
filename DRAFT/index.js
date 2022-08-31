var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'UTF-8' }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        });
    });
}

readFilePromise('song1.txt')
    .then(function(song1) {
        console.log(song1);
    })
    .catch(function(error) {
        console.log(error);
    });

