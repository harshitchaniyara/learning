function outerFunction(){
    let name = "Ravish";

    function innerFunction(){
        console.log(name);
    }
    innerFunction();
}
outerFunction();