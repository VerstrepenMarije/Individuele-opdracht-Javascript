    //get value from text boxes
    //https://linuxhint.com/get-checkbox-value-javascript/#:~:text=To%20get%20the%20checkbox%20value,and%20display%20its%20corresponding%20value.
    //https://stackoverflow.com/questions/11800257/call-javascript-function-only-when-checkbox-is-not-checked
    function getCheckboxValue() {
        
        if (document.getElementById("InschrijvenNieuwsbrief").checked) {
            alert("je bent ingeschreven voor de nieuwsbrief");
        }
        //  else if (document.getElementById("Akkoord").checked) {
        //     alert("je bent akkoord gegaan");
        // } 
        else if (document.getElementById("Akkoord").checked==false) {
            alert("je moet akkoord gaan met de voorwaarden")
        }
    }

    // get value from radio buttons
    // https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
    function getCheckedRadio() {
        var radio = document.getElementById("radio");
        var result = document.createElement("p");
        
        for (i = 0; i < radio.length; i++) {
            if(radio[i].checked) {
                result.innerHTML = "result: " + radio[i].value;
            }
        }
        document.getElementById("result").appendChild(result);
    }
    getCheckedRadio();
    
    getCheckboxValue();