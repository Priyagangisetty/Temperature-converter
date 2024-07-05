const temp = document.getElementById("temp");
        const check1 = document.getElementById("check1");
        const check2 = document.getElementById("check2");
        const submit = document.getElementById("submit");
        const result = document.getElementById("result")
        
    submit.onclick = function convert(){
        if(check1.checked){
            num = Number(temp.value);
            result.textContent = num* (9/5) + "F";
        }
        else if(check2.checked){
            num = Number(temp.value);
            result.textContent = num* (5/9) + "C";
        }
        else{
            result.textContent =`CHOOSE A TYPE OF CONVERSION`;
        }
    }