let inputElementObj=document.getElementById("inputEl");
let numberOne;
let numberTwo;

inputElementObj.addEventListener('keyup',(event)=>{
    if(event.key==='Enter'|| event.keyCode===13){
        let tempVal=inputElementObj.value;
        if(!isNaN(tempVal)){
            if(numberOne==undefined){
                numberOne=parseInt(tempVal);
                document.getElementById('num1').textContent=numberOne;
                inputElementObj.value=0;
            }else if(numberTwo==undefined){
                numberTwo=parseInt(tempVal);
                document.getElementById('num2').textContent=numberTwo;
                inputElementObj.value=0;
            }else{
                alert('Insert again');
                numberOne=undefined;
                numberTwo=undefined;
                document.getElementById('num1').textContent='?';
                document.getElementById('num2').textContent='?';

            }
           
        }

    }
});

const execute=(op)=>{
    if(!numberOne && !numberTwo){
        alert('Please insert numbers');
        return
    }
    switch(op){
        case '+':operate((numberOne+numberTwo),op);break;
        case '-':operate((numberOne-numberTwo),op);break;
        case '*':operate((numberOne*numberTwo),op);break;
        case '/':operate((numberOne/numberTwo),op);break;
        case '%':operate((numberOne%numberTwo),op);
    }
};

const operate=(result,op)=>{
    document.getElementById('op').textContent=op;
    document.getElementById('ans').textContent=result;  
};

