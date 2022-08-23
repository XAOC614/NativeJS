import {StudentType} from "../02/02";
import {student} from "../02/02";
export const sum = (a:number,b:number) => {
    return a+b;
}
export const addskill = (student:StudentType,skill:string) => {
    student.technologies.push({
        id:new Date().getTime(),
        title:skill
    })
}
export const makeStudentActive = (student:StudentType) => {
    student.isActive = false
}


