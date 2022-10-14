
 function validation(){
    var Name = document.getElementById('name').value;
    var username = document.getElementById('uname').value;
    var email = document.getElementById('eid').value;
    var number = document.getElementById('pno').value;
    var stnum = document.getElementById('stno').value;
    var roll = document.getElementById('rollno').value;
    var yr = document.getElementById('year').value;
    var password = document.getElementById('passwrd').value;
    var cpassword = document.getElementById('conpass').value;
    
    var nameCheck = /^[A-Za-z. ]{3,30}$/;
    var usernameCheck = /^[A-Za-z._ ]{3,30}$/;
    var emailCheck = /^[a-zA-Z0-9_.]{3,}[@][a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
    var phoneCheck = /^[6789][0-9]{9}$/;
    var stCheck = /^[12][0-9]{9}$/;
    var rollCheck = /^[12][0-9]{12}$/;
    var yrCheck = /^[1-4]{1}$/;
    var passwordCheck = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,16}$/;
    


    if(nameCheck.test(Name))
    {
        document.getElementById('name-error').innerHTML = " ";
    }
    else{
        document.getElementById('name-error').innerHTML = "INVALID NAME";
        return false;
    }
    if (usernameCheck.test(username)) {
        document.getElementById('username-error').innerHTML = " ";
    }
    else {
        document.getElementById('username-error').innerHTML = "INVALID USER NAME";
        return false;
    }
    if (emailCheck.test(email)) {
        document.getElementById('email-error').innerHTML = " ";
    }
    else {
        document.getElementById('email-error').innerHTML = "INVALID EMAIL";
        return false;
    }
    if (phoneCheck.test(number)) {
        document.getElementById('phone-error').innerHTML = " ";
    }
    else {
        document.getElementById('phone-error').innerHTML = "INVALID NUMBER";
        return false;
    }
    if (stCheck.test(stnum)) {
        document.getElementById('stno-error').innerHTML = " ";
    }
    else {
        document.getElementById('stno-error').innerHTML = "INVALID  STUDENT NUMBER";
        return false;
    }
    if (rollCheck.test(roll)) {
        document.getElementById('rollno-error').innerHTML = " ";
    }
    else {
        document.getElementById('rollno-error').innerHTML = "INVALID ROLL NUMBER";
        return false;
    }
    if (yrCheck.test(yr)) {
        document.getElementById('year-error').innerHTML = " ";
    }
    else {
        document.getElementById('year-error').innerHTML = "INVALID YEAR";
        return false;
    }
    if (passwordCheck.test(password)){
        document.getElementById('password-error').innerHTML = " ";
    }
    else {
        document.getElementById('password-error').innerHTML = "INVALID PASSWORD";
        return false;
    }
    if (password.match(cpassword)) {
        document.getElementById('conpas-error').innerHTML = " ";
    }
    else {
        document.getElementById('conpas-error').innerHTML = "PASSWORD IS NOT SAME";
        return false;
    } 
 }
//  function reset(){
//     document.getElementById('name-error').innerHTML = " ";
//     document.getElementById('username-error').innerHTML = " ";
//     document.getElementById('email-error').innerHTML = " ";
//     document.getElementById('phone-error').innerHTML = " ";
//     document.getElementById('stno-error').innerHTML = " ";
//     document.getElementById('rollno-error').innerHTML = " ";
//     document.getElementById('year-error').innerHTML = " ";
//     document.getElementById('password-error').innerHTML = " ";
//     document.getElementById('conpas-error').innerHTML = " ";
 //}