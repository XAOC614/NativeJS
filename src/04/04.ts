import React from "react";
const ages = [18,20,22,1,100,99,14]

const predicate = (age:number) => {
    return age > 90
}

const oldAges = ages.filter( ag => ag>90)

