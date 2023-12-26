
const programmingLang = ['js','java','python','cpp','c']

// programmingLang.forEach(function (item){
//     console.log(item)
// })

//using arrow function
/*
programmingLang.forEach((val)=>{
    console.log(val)
})

*/
/*
function printMe (item){
    console.log(item)
}

programmingLang.forEach(printMe)

*/

// programmingLang.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const coding = [
    {
        languageName : 'javascript',
        fileName: "js"
    },
    {
        languageName : 'java',
        fileName: "java"
    },
    {
        languageName : 'cpp',
        fileName: "c++"
    },
    {
        languageName : 'go',
        fileName: "gO"
    }
]


coding.forEach((item)=>{
    console.log(item.fileName)
    console.log(item.languageName)
    console.log("")
})

