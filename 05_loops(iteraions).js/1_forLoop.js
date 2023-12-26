// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
 

// for (let  index= 1;  index<= 10; index++) {
//     const element = index;
//     console.log(element);
// }
/*
for (let  i= 1;  i<= 10; i++) {
    const element = i;
    if(i==5){
        console.log(`${i} is best number` )
    }
    console.log(element);
}
*/

//outer loop and inner loop
/*
for (let  i= 1;  i<= 14; i++) {
    // console.log(`inner: ${i}`)

    for(let j =1 ;j <= 10; j ++){
        console.log(i + '*' + j +" "+ "=" + " "+ i*j);
    }
}
*/

// for(i=1;i<=13;i++){
//     for(j=1;j<=10;j++){
//         console.log(i+'*'+j+"="+i*j);
//     }
// }

//array
/*
let myArr = ['ironman','thor','capAmerica']

console.log(myArr.length);
for(i=0;i < myArr.length;i++){
    let element = myArr[i];
    console.log(element)
}
*/

// break and continue ########
/*
for(let i=1;i<=10;i++){
    if(i==5){
        console.log(`${i} Detected`)
        break;
    }
    console.log(i)
}
*/

for(let i=1;i<=10;i++){
    if(i==5){
        console.log(`${i} Detected`)
        continue;
    }
    console.log(i)
}
