function datValidation(){
    var name=document.getElementById("name");
    var address=document.getElementById("address");
    var password=document.getElementById("pass");
    var agreem=document.getElementById("check");
    if(name.value.length<3){
        alert("Your name must be atleast 3 characters.");
    }
    else if(address.value.length<10){
        alert("Your address must be atleast 10 characters.");
    }
    else if(!cekAlpnum(password.value)){
        alert("Your password must have atleast one alphabet and one number.");
    }
    else if(!agreem.checked){
        alert("You must agree with our terms and conditions.");
    }
    else{
        alert("You've successfully joined our membership.");
    }
}

function cekAlpnum(password){
    var isAlp=false;
    var isNum=false;
    for(let i=0;i<password.length;i++){
        if(isNaN(password[i])){
            isAlp=true;
        }
        else{
            isNum=true;
        }
        if(isAlp&&isNum){
            return true;
        }
    }
    return false;
}
