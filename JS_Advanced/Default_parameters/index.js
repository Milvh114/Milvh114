// Default_parameters - tham số mặc định

function greeting(name) {
    if (name === undefined) { // 
        name = 'friend'; // gán cho name 1 tham số mặc định là 'friend' đây gọi là Default_parameters
    // giả sử có nhiều tham số 1 tham số có gía trị mặc định thì việc so sánh sẽ mất thời gian
    }
    return `Hi, ${name}`;
}
// giả sử bây giờ mình muốn không truyền gì vào hàm greeting thì nó sẽ trả về giá trị undefined
greeting()

/** Cách tối ưu:
*/
// VD1:
function greeting(name = 'friend', language = 'ja') {//  <======================================|
    return `Hi, ${name}`; //                                                             |
} //                                                                                     |
greeting();// nếu mình không truyền gì vào hàm thì mặc định name của nó sẽ là 'friend'===|

// VD2:
function greeting(name = 'friend', language = 'ja') { // nếu không có gì truyên vào mặc định của nó sẽ là "friend" và "ja"
    if (language === 'en') {
        return `Hi, ${name}`;
    }
    if (language === 'ja') {
        return `konichiwa, ${name}`;
    }

    return 'Chào bạn';
}
console.log(greeting("Minh","ko"));
