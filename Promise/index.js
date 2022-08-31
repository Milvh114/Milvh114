/*
A Promise là một đối tượng đại diện cho việc hoàn thành hoặc thất bại cuối cùng của một hoạt động không đồng bộ-Sync. 
Vì hầu hết mọi người đều là người sử dụng những promise đã được tạo sẵn, 
nên hướng dẫn này sẽ giải thích việc sử dụng những promise bị trả lại trước khi giải thích cách tạo chúng.
*/

/*
Promise là gì? Promise nghĩa đen là hứa, bạn hứa là bạn sẽ làm điều gì thì có 2 trường hợp bạn làm được và làm không được, bạn làm được là resolved việc đó bạn làm không được nghĩa là bạn bị stuck chỗ nào và bạn phải vứt cục stuck đó ra (error hay exception). 
Và hứa thì bạn có thể hứa được nhiều điều không nhất thiết chỉ là một điều.
// HIểu vậy cho dễ hình dung.
*/

/*
tại sao ko truyền gì vào onDone như là onDone(content) chẳng hạn mà máy tính vẫn in ra nội dụng file 

bạn tìm hiểu đc chưa? Theo mình là do cái hàm fs.readFile sau khi đọc file nó trả về 2 cái là data và error, 
khi gọi hàm đấy thì giá trị chuyển vào then và catch tương ứng, rồi giá trị đấy cũng chuyển vào onDone với onError, 
thế nên 2 hàm mới nhận giá trị tương ứng là data của file hay error (cái này chắc do fs khởi tạo? Mình chưa tìm hiểu sâu về cái này)
*/

/****************************************************************************************************/

//var fs = require('promise-fs');    //fs chỉ là 1 cái tên

// cách viết bình thường:
// fs.readFile('song1.txt', { encoding: 'UTF-8' } )
//     .then(song => console.log(song))
//     .catch(error =>  console.log(error));

/************************************************************************/
console.log('==================================================') // ko có readfileSync nên nó ko chạy theo thứ tự
/************************************************************************/

// cách viết khác: bằng cách viết func riêng
// onDone = song =>  console.log(song);
// onError = error => console.log(error);
// readFile = path => fs.readFile(path, { encoding: 'UTF-8' });

// readFile('song1.txt')
//     .then(onDone)
//     .then(() => readFile("song2.txt"))
//     .then(onDone)
//     .catch(onError);

/****************************************************************************************************/
var fs = require('fs');

//cách viết dùng arrow
readFilePromise = path => { new Promise((resolve,reject) => { fs.readFile(path, { encoding: 'UTF-8' }, (err,data) => {
    if(err) {
        reject(err);
    } else {
        resolve(data);
    }
});});};
readFilePromise('song1.txt')
    .then(contentFile => console.log(contentFile))
    .catch(err => console.log(err));
/****************************************************************************************************/

// var fs = require('fs');

// cách viết không dùng arrow
// function readFilePromise(path) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(path, { encoding: 'UTF-8' }, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data)
//             }
//         });
//     });
// }

/* 
Cách hoạt động dòng code trên nó sẽ truyền vào func-readFilePromise 1 path 
và trả về 1 constructor_func mà func trả về đó sẽ nhận vào 2 tham số 
đó là nội-dung-của-file và lỗi nếu lỗi (có thể là lỗi file ko tồn tại) nó sẽ trả về reject(err) và hiện lỗi ra trên màn hình
nếu không nó sẽ trả về resolve(data)
*/

// readFilePromise('song1.txt')
//     .then(function(song1) {
//         console.log(song1);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

/****************************************************************************************************/

//NOTE:
/*
cho mình hỏi là nếu mình không dùng module promise thì mình sẽ tạo ra nó đúng không ạ? 
nếu mình dùng module thì không cần tạo nữa đúng không?


`promise-fs` là module để giúp bạn có thể gọi các API của `fs` theo kiểu promise để tránh callback hell. 
Module `fs` của node chỉ support dạng callback.

Ví dụ fs.readFile(options, function(err, data) { ... }); 
còn dùng module promise-fs thì sẽ là fs.readFile(options).then(function(data) { ... }).catch(function(error) {...})
*/