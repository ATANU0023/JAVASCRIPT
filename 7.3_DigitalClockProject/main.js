const clock = document.getElementById('clock')


//setInterVal() ,,, here set an interval and it will contineously repeat the same thing
//setInterval(function(){},1000)//always write like this..

setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleString())
    clock.innerHTML = date.toLocaleTimeString();
},1000)