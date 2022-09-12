function tossACoin(){
	var random = Math.random(); 
    var result = (random < 0.5) ? 'mặt sấp' : 'mặt ngửa'; //cách viết ngắn gọn của cách ở dưới

	// if (random < 0.5) {	
	// 	console.log('mặt sấp');
	// } else {
	// 	console.log('mặt ngửa');
	// }
    console.log(result); // 3 dòng MAGIC!
}
tossACoin();

function checkValue(a, b) {
    if (a === 1)
        if (b === 2)
            console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
checkValue(3, 2);

// function checkValue2(a, b) {
//     if (a === 1){
//         if (b === 2){
//             console.log("a is 1 and b is 2");
//         }
//     } else {
//       console.log("a is not 1");
//     }  
// }
// checkValue2(2, 3);