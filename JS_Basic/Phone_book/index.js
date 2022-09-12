var fs = require('fs')
var readlineSync = require('readline-sync');
var index = 0;
var list = [];

function showMenu() {

    console.log('1. Create a contact');
    console.log('2. Fix contact');
    console.log('3. Delete contact');
    console.log('4. Find contact');
    console.log('0.Save and exit')
    var option = readlineSync.question('> ')
    switch (option) {
        case '1':
            showCreateContact();
            showMenu();
            break;
        case '2':
            showFixContact();
            showMenu();
            break;
        case '3':
            showDeleteContact();
            showMenu();
            break;
        case '4':
            showFindContact();
            showMenu();
            break;
        case '0':
            saveAndExit();
            break;
    
        default:
            console.log('Wrong option!')
            showMenu()
            break;
    }

}


function showCreateContact() {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var contact = {
        order: index,
        name: name,
        age: parseInt(age)
    }
    list.push(contact);
    index++;
}

function showFixContact() {
    console.log(list);
    order = readlineSync.question('Order: ');
    // for (var phoneNum of list) {
    //     if(parseInt(order) !== phoneNum.order){
    //         console.log('Wrong order!');
    //         showFixContact();
    //         break;
    //     }
    // }
    if(parseInt(order) >= index){ 
        console.log('Wrong order'); 
        showFixContact(); 
    } else { // tại sao đây phải có else thế anh như kiểu ko có else thì em chạy chương trình 3 lần thì 1 lần chạy đúng ấy
        newName = readlineSync.question('New name: ');
        newAge = readlineSync.question('New age: ');
        list[parseInt(order)].name = newName; 
        list[parseInt(order)].age = parseInt(newAge); 
        }
    // newName = readlineSync.question('New name: ');
    // newAge = readlineSync.question('New age: ');
    // list[parseInt(order)].name = newName; 
    // list[parseInt(order)].age = parseInt(newAge); 
}

function showDeleteContact() {
    
}

function showFindContact() {

}

function saveAndExit() {

}




function main() {
    showMenu();
}



main();