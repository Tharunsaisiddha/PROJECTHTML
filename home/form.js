function validatename(){
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const namemessage = document.getElementById("namemessage");
    if (name.length >= 3){
        nameInput.style.borderColor = "green";
        namemessage.textContent = "Name looks Good";
        namemessage.style.color = "green";
        return true;
    }
    else{
        nameInput.style.borderColor = "red";
        namemessage.textContent = "Name should be at least 3 characters long";
        namemessage.style.color="red";
        return false;
    }
}
function validateemail(){
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailmessage = document.getElementById("emailmessage");
    const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(email)){
        emailInput.style.borderColor = "green";
        emailmessage.textContent = "valid email";
        emailmessage.style.color = "green";
        return true;
    }
    else{
        emailInput.style.borderColor = "red";
        emailmessage.textContent = "Enter a valid email address";
        emailmessage.style.color="red";
        return false;
    }
}
function validatepassword(){
    const password = document.getElementById("password").value;
    const passwordInput = document.getElementById("password");
    const passwordmessage = document.getElementById("passwordmessage");
    if (password.length >=6){
        passwordInput.style.borderColor = "green";
        passwordmessage.textContent = "Strong password";
        passwordmessage.style.color = "green";
        return true;
    }
    else{
        passwordInput.style.borderColor = "red";
        passwordmessage.textContent = "password should be at least 6 characters long";
        passwordmessage.style.color="red";
        return false;
    }
}
document.getElementById("myform").addEventListener("submit", function(event){
    const isvalidname = validatename();
    const isvalidemail = validateemail();
    const isvalidpassword = validatepassword();
    if(!isvalidname || !isvalidemail || !isvalidpassword){
        event.preventDefault();
    }

});