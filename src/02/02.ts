type LocalCityType = {
    title:string
    countryTitle:string
}
type AddressType = {
    streetTitle:string
    city:LocalCityType
}
type TechnologiesType = {
    id:number
    title:string
}
export type StudentType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address:AddressType
    technologies:Array<TechnologiesType>
}
 export const student: StudentType = {
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

console.log(student.technologies[2].title)