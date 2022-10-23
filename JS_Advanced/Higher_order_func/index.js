//Higher order function
// là 1 hàm có thể nhận 1 function làm tham số hoặc trả về 1 function
// NOTE: hàm gọi hàm như kiểu là callback ta đã làm nhiều

// Ví dụ 1:
function debug(name) {
    return function(str) {
        console.log(`[${name}] ${str}`)
    }
}
const log = debug('Mouse');
log('Error happened ')

// Ví dụ 2:
function waitAndRun(ms, func) {
    setTimeout(func, ms)
}
function run() {
    console.log('Run');
}

waitAndRun(1000, run);

//Ứng dụng:
// chia nhỏ chương trình - thường 1 chương trình ta sẽ chia nhỏ thành nhiều hàm => chia nhỏ logic ra rồi test
// các hàm nhỏ khi kết thúc hàm nó sẽ giải phóng bộ nhớ nó sẽ chạy hiệu quả hơn