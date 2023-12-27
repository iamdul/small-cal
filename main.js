let inputElementObj=document.getElementById("inputEl");
let numberOne;
let numberTwo;
inputElementObj.addEventListener('keyup',(event)=>{
    if(event.key==='Enter'|| event.keyCode===13){
        let tempVal=inputElementObj.ariaValueMax;
        if(!isNaN(tempVal)){
            numberOne=parseInt(tempVal);
        }
    }
})
//=====functions,operators,switch,if
