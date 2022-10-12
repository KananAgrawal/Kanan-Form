var nameError =document.getElementById('name-error');
var usernameError =document.getElementById('username-error');
var emailError =document.getElementById('email-error');
var phoneError =document.getElementById('phone-error');
var stnoError =document.getElementById('stno-error');
var rollnoError =document.getElementById('rollno-error');
var dobError =document.getElementById('DOB-error');
var yearError =document.getElementById('year-error');
var branchError =document.getElementById('branch-error');
var domainError =document.getElementById('domain-error');
var passwordError =document.getElementById('password-error');
var conpwdError =document.getElementById('conpas-error');
var submitError =document.getElementById('submit-error');

 function validation(){
        var name = document.getElementById('name').value;
        if(name.length==0){
            nameError.innerHTML = 'Name is required';
            return false;
        }
        /*var username = document.getElementById('uname').value;
        if(username.length==0){
            usernameError.innerHTML = 'UserName is required';
            return false;
        }
        var email = document.getElementById('eid').value;
        if(email.length==0){
            emailError.innerHTML = 'Email-Id is required';
            return false;
        }
        var phone = document.getElementById('pno').value;
        if(phone.length==0){
            phoneError.innerHTML = 'Phone No is required';
            return false;
        }
        var sno = document.getElementById('stno').value;
        if(sno.length==0){
            stnoError.innerHTML = 'Student No. is required';
            return false;
        }
        var date = document.getElementById('birthday').value;
        if(roll.length==0){
            dobError.innerHTML = 'DOB is required';
            return false;
        }
        var yr = document.getElementById('year').value;
        if(yr.length==0){
            nameError.innerHTML = 'Year is required';
            return false;
        }
        var br = document.getElementById('branch').value;
        if(br.length==0){
            branchError.innerHTML = 'Branch is required';
            return false;
        }
       /* var name = document.getElementById('name').value;
        if(name.length==0){
            nameError.innerHTML = 'Name is required';
            return false;
        }
        var name = document.getElementById('name').value;
        if(name.length==0){
            nameError.innerHTML = 'Name is required';
            return false;
        }
        var name = document.getElementById('name').value;
        if(name.length==0){
            nameError.innerHTML = 'Name is required';
            return false;
        }
        var name = document.getElementById('name').value;
        if(name.length==0){
            nameError.innerHTML = 'Name is required';
            return false;
        }*/
       
    
 }