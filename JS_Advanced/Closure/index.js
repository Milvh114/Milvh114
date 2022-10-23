// Closure 
//garbage collector(gc) - thằng này sẽ check xem những biến không dùng nữa rồi bỏ nó ra khỏi bộ nhớ

function sum(a, b) {
    const c = a + b;
    // return c;
    // trong JS có thể hàm trả về 1 hàm nghĩa là return function
    return function() {
        console.log(c); // chú ý trong dòng này ta có tham chiếu 1 biến c nằm ở bên ngoài và biến này nằm trong scope của hàm chứa nó
        // như thằng gc thì đáng lẽ thằng c sẽ được giải-phóng(collection) bộ nhớ nghĩa là không truy cập được biến bên ngoài scope của nó
        //Nhưng đây là 1 tính năng của JS gọi là closure nên vẫn có thể truy cập vào
    };
}
//theo bình thường thì khi hàm kết thúc thì tất cả các biến trong hàm này sẽ bị xoá khỏi bộ nhớ
// sum(1, 2);

// Vì sum() mình trả về 1 hàm nên để thực hiện hàm đó ta sẽ gọi như sau:
sum(1, 2)();


//NOTE: hàm trả về đấy có thể truy cập và có thể thay đổi các biến bên ngoài
//Ứng dụng: làm những cái function Factory ở trong design patterns - hiểu nôm na là function trả về function

// Ví dụ:
// function debug(name) {
//     return function(str) {
//         console.log(`[${name}] ${str}`)
//     }
// }
function debug(name) {
    return str => console.log(`[${name}] ${str}`);
}
//cách 1:
debug('Mouse')('Error happened');
//cách 2:
const log = debug('Cat');
log('No error')
//Note có thể coi hàm debug() và sum() là 1 higher order function