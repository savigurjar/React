console.log("Hello Coder Army");

let b = 30;
function greet()
{
    let a =10;
   
   //closure function (acces to the outer scope) - > address store kr ke rkhta h
    function meet()
    {
        console.log(a);
    }
    return meet;
}
const num = greet();
// console.log(num);
num();