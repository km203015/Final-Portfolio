//http://jsfiddle.net/loktar/7peJT/3/

//http://jsfiddle.net/loktar/7peJT/6/
function changeColor(curNumber){
    curNumber++;

    if(curNumber > 3){
        curNumber = 1;
    }
    document.getElementById("mainContent").setAttribute('class', 'color' + curNumber);
    console.log(curNumber);
    setTimeout(function(){changeColor(curNumber)}, 5000);
}

changeColor(0);
