const num = document.getElementById("top-box");

function aprendToDisplay(input)
{
    num.innerHTML += input;
}
function clearIt()
{
    num.innerHTML = "";
}
function calc(){
    num.innerHTML = eval( num.innerHTML);
}