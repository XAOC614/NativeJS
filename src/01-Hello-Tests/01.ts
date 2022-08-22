

export const  splitIntoWords = (sentense:string) => {
    const words = sentense.toLocaleLowerCase().split(" ")
    return words.filter(w=> w !=="")
        .map(w=>w
            .replace("!","")
            .replace(".","")
            .replace(",",""))
}

export const sum = (a:number, b:number)=> {
    return a+b
}
export const mult = (a:number, b:number)=> {
    return a*b
}