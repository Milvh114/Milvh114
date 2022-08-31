// Date: là 1 thời điểm nhất định và nó lưu trữ 1 giá trị là số millisecond từ 1-1-1970 UTC
// moment.js
var moment = require('moment')

// var now = new Date() ;

// var myBirthday = new Date(2002, 3, 11) // 11-4-2002

// console.log(now.getTime()); // expect: giá trị trả về sẽ thay đổi vì mình đang gọi thời điểm hiện tại cho tới 1-1-1970 UTC
// console.log(myBirthday.getTime());// expect: trả về 1 giá trị là số millisecond từ thời điểm hiện tại tới thời điểm 1-1-1970 UTC


// Moment.js

var now = moment('2022-11-12 22:00');
console.log(now.fromNow());  // .fromNow nó sẽ trả về còn bao nhiêu thời gian thì tới thời điểm mình cài đặt ở trên