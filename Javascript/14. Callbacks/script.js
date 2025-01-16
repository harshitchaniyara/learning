function addition(a, b, callback){
    let sum = a + b;

    callback(sum);

}

function myDisplayer(result){
    console.log(`The result is ${result}`);
}
 addition(2, 6, myDisplayer);

