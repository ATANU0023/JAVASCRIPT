
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions: one called if the audio file is successfully created, and the other called if an error occurs.

Here's some code that uses createAudioFileAsync():

JS

function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);*/

const promiseOne = new Promise((resolve, reject)=>{
    //Do async task
    //DB calls , cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete')
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
})

//it also done like this (bottom) 

new Promise ((resolve,reject)=>{
    setTimeout(() => {
        console.log('async task 2')
    }, 1000);
    resolve();
}).then(function(){
    console.log('promise 2 resolved')
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({userName:'atanu',email:'atanu@gamil.com'})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName:'atanu',password:'1234'})
        }
        else{
            reject('ERROR:something went worng')
        }
    }, 1000);
})
promiseFour
.then((user)=>{
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('The promise is either resolved or rejected.')
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName:'javascript',password:'1234'})
        }
        else{
            reject('ERROR:something JS went worng')
        }
    }, 1000);
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log("ERROR")
    }
}
consumePromiseFive();

/*
async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/ATANU0023')
        //console.log(response);
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log("E:",error)
    }
}
getAllUsers()
*/

fetch('https://api.github.com/users/ATANU0023')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log("error"))



//fetch : https://www.tldraw.com/v/bNuu2U0ukmT9YFGRSV_qq?viewport=-36,-1,1536,750&page=page:DfrTxQTQ0gckW_7q9mNqO