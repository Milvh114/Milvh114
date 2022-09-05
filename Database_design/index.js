var classes = [
    {
    id: 0,
    name: '1A',
    teacher: 0, //{
    //     name: 'Quynh',
    //     age: 30
    // },họ thay prop teacher bằng ID tương ứng với class
    student: [ //họ sẽ thay student bằng các ID của student 
        0,
        1,
        2
    ]
},
    { 
    id: 1,
    name : '2A',
    teacher: 1, //{
    //     name: 'Chinh',
    //     age: 55
    // }
},
    {
    id: 2,
    name : '3A',
    teacher: 3, //{
    //     name: 'Nguyet',
    //     age: 60
    // }
},
    {
    id: 3,
    name : '4A',
    teacher: 4, //{
    //     name: 'Huong',
    //     age: 40
    // }
},
    {
    id: 4,
    name : '5A',
    teacher: 4, //{
    //     name: 'Hai',
    //     age: 45
    // }
},
]


var teachers = [
    {
        id: 0,
        name: 'Quynh',
        age: 30
    },
    {
        id: 1,
        name: 'Chinh',
        age: 55
    },
    {
        id: 2,
        name: 'Nguyet',
        age: 60
    },
    {
        id: 3,
        name: 'Huong',
        age: 40
    },
    {
        id: 4,
        name: 'Hai',
        age: 45
    }
]


var students = [
    { id: 0, name: 'Minh', height: 120, class: 0 },
    { id: 1, name: 'Linh', height: 120, class:0 },
    { id: 2, name: 'Ha', height: 120, class: 0 },
    { id: 2, name: 'Ha', height: 120, class: 1 }
]


function getStudentInClass(className) {
    var classObject = classes.find(x => x.name === className)
    var studentInClass = students.filter(student => student.class === classObject.id)
    return studentInClass;
}

var studentInClass = getStudentInClass('2A');
console.log(studentInClass);

//cách in ra khác console.log(getStudentInClass('1A'));

