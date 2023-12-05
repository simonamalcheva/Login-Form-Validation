const username = document.getElementById("username");
const password = document.getElementById("password");

function submitForm(){
    if (username.value == "") username.required();
    if (password.value == "") password.required();
    if (validateForm()) confirm("Your login was successful.");
}

function validateForm(){
    var usernameRegex = /^[a-zA-Z0-9]{1,26}$/; //username must be max. 26 characters, only letters and numbers allowed
    let validUsername = username.value.match(usernameRegex);  
    if(validUsername == null){
        alert("Username must be max. 26 characters, only letters and numbers allowed.");
        return false;
    }

    var passwordRegex = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,16}$/; //password must be 8-16 characters, at least 1 letter and 1 number
    let validPassword = password.value.match(passwordRegex);
    if(validPassword == null){
        alert("Password must be 8-16 characters, at least 1 letter and 1 number.");
        return false;
    }

    return true;
}