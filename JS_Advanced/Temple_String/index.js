// Template string

function greeting(name) {
    return 'hi, ' + name + '!';
}

// ở template string nó sẽ tìm dấu huyền thứ nhất sau đó tìm dấu chéo huyền thứ nó -> nó sẽ đóng lại kết thúc 1 string
// nó có thể xuống dòng không như cách thông thường
function greeting2(name) {
    return `Hi,



${name} ${1+2}!`;
}

var result = greeting("ha");
var result2 = greeting2("minh");

console.log(result);
console.log(result2);