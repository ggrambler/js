
const temp = document.getElementById("temp");
const para = document.getElementById("para");
const rad1 = document.getElementById("rad1");
const rad2 = document.getElementById("rad2");
let tvalue;

console.log(temp.value);
function convert(){

    console.log(temp.value);

    if(rad1.checked){
        tvalue = Number(temp.value);
        tvalue = tvalue*9/5 + 32;
        para.textContent = tvalue.toFixed(1) + " ^F";
        console.log(tvalue);
    }
    else if(rad2.checked){
        tvalue = Number(temp.value)
        tvalue = (tvalue-32)*5/9;
        para.textContent = tvalue.toFixed(1) + " ^C";
        console.log(tvalue);

    }
    else 
    {
        para.textContent = "Select a Conversion!!";
    }
}