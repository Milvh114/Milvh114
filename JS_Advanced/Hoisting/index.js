// hoisting

/*************************************************************************/
/*                         DEFINITION                                    */
/*************************************************************************/

// EXAMPLE:

//console.log(x) // Nếu chỉ chắc console.log(x) thì sẽ hiện thông báo "x is not defined"

// khác với:


// var x; <-----------<------------<----------------<---------------<--------------------<---------|
console.log(x); // lúc này console.log(x) sẽ trở thành "undefined" khác với "x is not defined"     |

var x = 5;      //trong JS nếu chạy dòng này thì nó sẽ khai báo 1 biến x ở trên cùng  ---->----->--|

// đây là hiện tượng hoisting ------> HAY GÂY RA LỖI ⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠

/*************************************************************************/
var show_me;
show_me();
function show_me(){
  console.log('Money');
}
show_me = function(){
  console.log('Diamond');
}
function show_me(){
  console.log('Gem');
}
// EXPERT: Gem // 

/*************************************************************************/




/*************************************************************************/
/*                           HOW TO AVOID                                */
/*************************************************************************/

// THÔNG THƯỜNG HỌ SẼ KHAI BÁO BIẾN Ở TRÊN CÙNG


