let inputElement = document.getElementById('input');
let resultIndication = document.getElementById("result");

function logText() {
    let textString = inputElement.value;
    if (textString === 'ראס אל חנות'){ 
        console.log(true)
        resultIndication.innerText = 'מדהים, זה בול זה'
    } else {
        console.log(false)
        resultIndication.innerText = 'נסו שוב'
    }
}