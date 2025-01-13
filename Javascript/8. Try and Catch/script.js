// try{
//     alert('Hello World');
// } catch(error){
//     document.getElementById('error').innerHTML = error;
// }

function checkValue(){
    // document.getElementById('p01').innerHTML = document.getElementById('number').value;
    let errMessage = document.getElementById('p01');
    let number = document.getElementById('number').value;
    // if(number >= 5 && number <= 10){
    //     errMessage.innerHTML = 'Input ' + number + 'is between 5 to 10, is valid';
    // } else{
    //     errMessage.innerHTML = 'Input ' + number + ' is not between 5 to 10, is invalid';
    // }

    try{
        if(number.trim() == "")
            throw "Empty";
        if(isNaN(number))
            throw "Not a number";
        number = Number(number);
        if(number >= 5 && number <= 10)
            throw "Input " + number + " is between 5 to 10, is valid";
    } catch(error){
        errMessage.innerHTML = 'Input is ' + error;
    }
}