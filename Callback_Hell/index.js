var fs = require('fs');

//Cách đọc file dùng Sync.

// var song1 = fs.readFileSync('song1.txt', {encoding: 'UTF-8'});
// var song2 = fs.readFileSync('song2.txt', {encoding: 'UTF-8'});
// var song3 = fs.readFileSync('song3.txt', {encoding: 'UTF-8'});
// console.log(song1, song2, song3);

/*********************************************************************************/
/*                                     THE_END                                   */
/*********************************************************************************/

//Ví dụ ở dưới được gọi là Callback_Hell

fs.readFile('./song1.txt', { encoding: 'UTF-8' }, function(err, song1){
    console.log(song1);
    fs.readFile('./song2.txt', { encoding: 'UTF-8' }, function(err, song2){
        console.log(song2);
        fs.readFile('./song3.txt', { encoding: 'UTF-8' }, function(err, song3){
            console.log(song3);
        });
    });
});

