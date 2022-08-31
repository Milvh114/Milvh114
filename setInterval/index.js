// setInterval
// clearInterval : dùng để xoá ID đó đi

// setInterval(func, ms)
// thằng setTimeout sẽ chờ ms để thực hiện func còn thằng setInterval sẽ thực hiện func liên tục sau mỗi khoảng ms

var i = 0;
var intervalId = setInterval(() => {
    ++i;
    console.log(i)
    if (i === 5 ) {
        clearInterval(intervalId); // gán setInterval vào biến vào gọi lại 1 lần nữa bằnd clearInterval để dừng 
    }
},1000)

// Write a function count from 1 to 10
// return a promise

// function countFrom(a, b) {

// }

// countFrom(1, 10).then(() => console.log('Done'))