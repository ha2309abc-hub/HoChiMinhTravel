// object "Validator"
function Validator(options){
    let formElement = document.querySelector(options.form);
    if (formElement)
        console.log(formElement)
}

// define rules
Validator.isRequired = function(){

}

Validator.isPassword = function(){

}