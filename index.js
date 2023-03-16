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
const resultbanking = document.getElementById('resultbanking');
const resultsubmit = document.getElementById('resultsubmit');
const button = document.getElementById('button'); 
const postalcode = document.getElementById('Postcode');
var radioButtons = document.getElementsByName('MyRadioButton');
var errors = [];

button.addEventListener("click", validateForm, true);

function validateForm(){
   
    // https://www.youtube.com/watch?v=In0nB0ABaUk 
    //with parameters doens't work
    function checkEmptyField(){

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
        //check adress for value
        if(adress.value.trim() === ""){
            errors.push("Het veld adres is vereist.")
        }
        //check country for value
        var country = document.getElementById("Land");
        var countryValue = country.value;

        if(countryValue == 0) {
            errors.push("Kies een land.")
        }
        //check province for value
        var province = document.getElementById("Provincie");
        var provinceValue = province.value;

        if(provinceValue == 0) {
            errors.push("Kies een provincie.")
        }

        // //check agreement for value
        // //https://stackoverflow.com/questions/11800257/call-javascript-function-only-when-checkbox-is-not-checked
        if (document.getElementById("Akkoord").checked==false) {
            errors.push("Je moet de algemene voorwaarden accepteren");
        }
        //show error messages
        if (errors.length > 0) {
            result.innerHTML = "<h4>Yikes, errors...</h4>" + errors.join("<br>");
            document.getElementById("result").style.display = "block";
        }
        
    }
    checkEmptyField();
    

    //validate email
    function validateEmail(email){
    //https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.match(validRegex)) {
            return true;
        }
        else {
            errors.push("Geef een valide email adres");
        }
    }
    validateEmail(email);

    //validate password
    function validatePassword(password,passwordRepeat) {
        if (password.length < 8) {
            errors.push("Het wachtwoord moet langer zijn dan 7 karakters.")
        }
        if (password !== passwordRepeat){
            errors.push("De wachtwoorden komen niet overeen.")
        }
    }

    validatePassword(password,passwordRepeat);

    //validate payment 
    //doesnt show value
    function validatePayment() {
        var bankinkappradio = document.getElementById("BankingApp");
        var overschrijvingradio = document.getElementById("Overschrijving");
        var visaradio = document.getElementById("Visa");
        var paypalradio = document.getElementById("Paypal");
        var  resultbankingarray = [];
        if(bankinkappradio.checked) {
            resultbankingarray.push("Banking App")
        }
        else if(overschrijvingradio.checked) {
            resultbankingarray.push("Overschrijving")
        }
        else if(visaradio.checked) {
            resultbankingarray.push("Visa")
        }
        else if(paypalradio.checked) {
            resultbankingarray.push("Paypal")
        }
        
        
        //give bank information and succes script if errors = 0
        if(errors.length == 0) {
        document.getElementById("resultbanking").style.display = "block";
        document.getElementById("resultsubmit").style.display = "block";
        resultbanking.innerHTML = "<h4>Betalingswijze</h4>" + "Je betalingswijze is " + resultbankingarray;
        resultsubmit.innerHTML = "<h4>Goed gedaan!</h4>" + "Aaw yeah,  je werd geregistreerd";
        }
    }

    validatePayment();

    function checkPC(postalcode) {
        if(postalcode.value.trim() === "") {
            errors.push("Het veld postcode is vereist.");
        }
        else if (postalcode >= 1000 || postalcode < 10000) {
            errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.")
        }
    }

    checkPC(postalcode);




}    

