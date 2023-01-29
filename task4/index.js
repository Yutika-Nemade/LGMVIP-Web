let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('button')
let screenValue = "";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='x'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText=="="){
            screen.value = eval(screenValue);
        }

        else if(buttonText == "del"){
            var a = screenValue.length - 1;
            screenValue = screenValue.slice(0,a);
            screen.value = screenValue;
        }
        else{
            screenValue +=buttonText;
            screen.value = screenValue;
        }
    })
}