function validation (){
    if(document.Formfill.Fullname.value == ""){
       document.getElementById("result").innerHTML="Enter Fullname*";
        return false;
    }
else if(document.Formfill.Fullname.value.lenght<6){
    document.getElementById("result").innerHTML="Atleast six letter*";
     return false;
 }
 else if(document.Formfill.Email.value == ''){
    document.getElementById("result").innerHTML="Enter your Email*";
     return false;
 }
 else if(document.Formfill.Password.value == ''){
    document.getElementById("result").innerHTML="Enter your Password*";
     return false;
 }
 
}