const form = document.querySelector('form')

//const height = parseInt(document.querySelector('#height').value)
//this usecase will give you empty value

form.addEventListener('submit' ,function(e){
    e.preventDefault()  

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const guide = document.querySelector('#guide')

    if(height === '' || isNaN(height) || height < 0){
        results.innerHTML = `please give a valid height ${height}`
    }
    else if(weight === '' || isNaN(weight) || weight < 0){
        results.innerHTML = `please give a valid weight ${weight}`
    }
    else{
       const bmi = (weight / ((height/100)**2)).toFixed(2)
        //show the result
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`
        if(`${bmi}`<18.6){
            guide.innerHTML=`<span>Under Weight</span>`
        }
        else if(`${bmi}`>=18.6 && `${bmi}`<24.9){
            guide.innerHTML=`<span>Normal Range</span>`
        }
        else{
            guide.innerHTML=`<span>Overweight</span>`

        }
    }
})