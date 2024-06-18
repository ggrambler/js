
// document.getElementById("dec").onclick = 
//     function()
//     {
    
//     }

const DT = document.getElementById("dec");
const RT = document.getElementById("res");
const IT = document.getElementById("inc");

let count = 0;

IT.onclick = function()
{
    count++;
    if(count > 0){document.getElementById("countlabel").textContent = `+${count}`}
    else{
    document.getElementById("countlabel").textContent = count;
}}
RT.onclick = function()
{
    count = 0;
    document.getElementById("countlabel").textContent = count;
}
DT.onclick = function()
{
    count--;
    document.getElementById("countlabel").textContent = count;
}