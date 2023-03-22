//declaration 
const form = document.getElementById('form');
const result = document.getElementById('result');
const resultbanking = document.getElementById('resultbanking');
const resultsubmit = document.getElementById('resultsubmit');
const button = document.getElementById('button'); 
var errors = [];

button.addEventListener("click", validateForm, true);

function validateForm(){
   
    // https://www.youtube.com/watch?v=In0nB0ABaUk 
    //with parameters doens't work
    function checkEmptyField(){
        //check first name for value
        const firstname = document.getElementById('Voornaam');
        if(firstname.value.trim() === "") {
            errors.push("Het veld voornaam is vereist.")
        }
        //check name for value
        const name = document.getElementById('Naam');
        if(name.value.trim() === ""){
            errors.push("Het veld Naam is vereist")
        }
        //check username for value
        const username = document.getElementById('Gebruikersnaam');
        if(username.value.trim() === ""){
            errors.push("Het veld gebruikersnaam is vereist.")
        }
        //check adress for value
        const adress = document.getElementById('Adres');
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
    }
   
    
    //validate email
    //https://masteringjs.io/tutorials/fundamentals/email-regex
    function validateEmail() {
        const email = document.getElementById('Email');
        if (email.value.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)) {
            console.log("email is valid");
        }
        else {
            errors.push("email adres is niet juist");
        }
    }
    

    //validate password
    function checkpassword () {
        const password = document.getElementById('Wachtwoord').value;
        const passwordRepeat = document.getElementById('WachtwoordHerhaal').value;
        if (password.length < 8) {
            errors.push("Wachtwoord moet langer zijn dan 7 tekens");
        }

        if (password != passwordRepeat) {
            errors.push("Wachtwoorden komen niet overeen");
        }
    }

    //check postal code
    const postalcode = document.getElementById('Postcode');
    function checkPC(postalcode) {
         if(postalcode.value.trim() === "") {
             errors.push("Het veld postcode is vereist.");
         }
          else if (postalcode >= 1000 || postalcode < 10000) {
              errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.")
          }
    }

 

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


    //show error messages
    function errormessage() {
        if (errors.length > 0) {
            result.innerHTML = "<h4>Yikes, errors...</h4>" + errors.join("<br>");
            document.getElementById("result").style.display = "block";
        } 
    }


    //functions
    checkEmptyField();
    validateEmail();
    checkpassword();
    checkPC(postalcode);
    errormessage()
    validatePayment();
    

}    

