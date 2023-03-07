//declaration 
const form = document.getElementById('form');
const firstname = document.getElementById('Voornaam');
const name = document.getElementById('Naam');
const username = document.getElementById('Gebruikersnaam');
const email = document.getElementById('Email');
const password = document.getElementById('Wachtwoord');
const passwordRepeat = document.getElementById('WachtwoordHerhaal');
const adress = document.getElementById('Adres');
const result = document.getElementById('result');
const button = document.getElementById('button'); 

button.addEventListener("click", checkInputs);
    
// https://www.youtube.com/watch?v=In0nB0ABaUk  
function checkInputs(){
    var errors = [];

    //check first name for value
    if(firstname.value.trim() === "") {
        errors.push("Het veld voornaam is vereist.")
    }
    //check name for value
    if(name.value.trim() === ""){
        errors.push("Het veld Naam is vereist")
    }
    //check username for value
    if(username.value.trim() === ""){
        errors.push("Het veld gebruikersnaam is vereist.")
    }
    //check email for value
    if(email.value.trim() === ""){
        errors.push("Het veld email is vereist.")
    }
    //check password for value
    if(password.value.trim() === ""){
        errors.push("Het veld wachtwoord is vereist.")
    }
    //check passwordrepeat for value
    if(passwordRepeat.value.trim() === ""){
        errors.push("Het veld herhaal wachtwoord is vereist.")
    }
    //check adress for value
    if(adress.value.trim() === ""){
        errors.push("Het veld adres is vereist.")
    }
    //check province for value
    //check postal code for value
    //check agreement for value
    //https://stackoverflow.com/questions/11800257/call-javascript-function-only-when-checkbox-is-not-checked
    if (document.getElementById("Akkoord").checked==false) {
        errors.push("Je moet de algemene voorwaarden accepteren");
    }

    //check radio button value 
    var radio = document.getElementById("radio");
    var resultbanking = document.getElementById("resultbanking")

    for (i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            resultbanking.innerHTML = "Je betalingswijze is " + radio[i].value;
        }
     }


    //show error messages
    if (errors.length > 0) {
        result.innerHTML = errors.join(', ');
    }

}    
    





