function validateANDadd() {

    var theNewWord = document.forms["myForm"]["newWord"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;

    if (theNewWord == "") {
        alert("Please enter a word to check");
        return false;
    }

    else if ((theNewNumber != 1) && (theNewNumber != 2)) {

        alert("Please enter a 1 or 2 for the list.");
        document.forms["myForm"]["newNumber"].value = "";
        return false;
    }

    else {

        if (theNewNumber==1) {
            var tableRef = document.getElementById("myList1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + ': ' + checkPalindrome(theNewWord);
        }

        else {

            var tableRef = document.getElementById("myList2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + ':' + checkPalindrome(theNewWord);
        }
        
        document.forms["myForm"]["newWord"].value = "";
        document.forms["myForm"]["newNumber"].value = "";
        return true;
    }

}

function clearList1() {

    var tableRef = document.getElementById("myList1");
    tableRef.innerHTML = " ";
}

function clearList2() {

    var tableRef = document.getElementById("myList2");
    tableRef.innerHTML = " ";
}

function checkPalindrome(theNewWord) {
    var theNewWordString = theNewWord.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;

        if(theNewWordString==="") {
            return false;
}
        if ((theNewWordString.length) % 2 === 0) {
            ccount = (theNewWordString.length) / 2;

        } else {

        if (theNewWord.length === 1) {
            return true;

        } else {

            ccount = (theNewWordString.length - 1) / 2;
    }
}

        for (var x = 0; x < ccount; x++) {

            if (theNewWordString[x] != theNewWordString.slice(-1-x)[0]) {
                return false;
            }
        }
        
        return true;
    }