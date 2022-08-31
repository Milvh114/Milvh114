var co = require('co');
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

//bạn gọi thằng co và truyền vào 1 function và dùng nó
// co (function*() { 
// cách 1:
// /********************************************************************************/
//     // var song1 = yield readFilePromise('./song1.txt');
//     // var song2 = yield readFilePromise('./song2.txt');
//     // var song3 = yield readFilePromise('./song3.txt');
//     // console.log(song1, song2, song3)  //console.log thì ko cần return .then()
//     // return [song1, song2, song3]; // nó trả về 1 promise
// /********************************************************************************/

// cách 2:
// /********************************************************************************/ 
//     var values = yield [
//         readFilePromise('./song1.txt'),
//         readFilePromise('./song2.txt'),
//         readFilePromise('./song3.txt')
//     ];
//     return values;
// }).then(values => {
//     console.log(values);
// }).catch(error => console.log(error));
/********************************************************************************/

/********************************************************************************/
/**                                     THE_END                               **/
/******************************************************************************/

// cách khác dùng co.wrap():
// trường hợp bạn muốn khai báo mà phải dùng sau thì dùng co.wrap()

var readFiles = co.wrap(function*(files) {
    //string --> promise()
    var values = yield files.map(file => {
        return readFilePromise(file);
    });
    return values; // những giá trị trả về values sẽ đươc truyền vào thằng .then() 
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
    .then(values => {
        console.log(values);
    });

//2 cách trên chỉ khác cách dùng
/*
cách đầu là gọi thằng co và truyền vào 1 function 
cách sau thì gọi thằng co.warp và bạn dùng sau
*/