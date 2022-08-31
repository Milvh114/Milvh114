const { error } = require('console');
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

//cach viet bthg

// readFilePromise('./song1.txt')
//     .then(song1 => {
//         console.log(song1);
//         return readFilePromise('./song2.txt');
//     })
//     .then(song2 => {
//         console.log(song2);
//         return readFilePromise('./song3.txt');
//     })
//     .then(song3 => {
//         console.log(song3);
//     })


// Promise.all

Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt') //resolved
]) //then sẽ thực hiện khi 3 promise trên được resolved
    .then((values) => {
        console.log(values);
    })
    .catch((error) => { // dòng này sẽ chạy nếu có lỗi như là file ko tồn tại
        console.log(error);
    });