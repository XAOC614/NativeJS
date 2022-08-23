import {StudentType} from "../02/02";
import {addskill, makeStudentActive} from "./03";


let student:StudentType;
beforeEach(()=>{
    student = {
        id:1,
        name: 'Sergio',
        age: 30,
        isActive: true,
        address: {
            streetTitle: 'Ilinskogo',
            city:{
                title:'Vitebsk',
                countryTitle: 'Belarus'
            }
        },
        technologies:[
            {
                id:1,
                title:'HTML'
            },{
                id:2,
                title:'CSS'
            },{
                id:3,
                title:'React'
            }
        ]

    }
})
test('new tech skill shoud be added to student',()=>{

    expect(student.technologies.length).toBe(3)
     addskill(student,'JS');

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be active',()=>{
    expect(student.isActive).toBe(true)

    makeStudentActive(student);

    expect(student.isActive).toBe(false)
})