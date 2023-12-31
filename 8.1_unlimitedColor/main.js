//generate randomcolor
const randomcolor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6 ;i++ ){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomcolor());

let intervalId;
let textCol;
const startChangingColor = function(){

    if(!intervalId && !textCol){
        intervalId = setInterval(changeBodyColor,1000);
        textCol = setInterval(text,3000);
    }

    function changeBodyColor(){
        document.body.style.backgroundColor = randomcolor();
    }

    function text() {
       let x = document.querySelector('.p');
       x.style.color = randomcolor();
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    clearInterval(textCol);
    intervalId = null;
    textCol = null;
}



document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
