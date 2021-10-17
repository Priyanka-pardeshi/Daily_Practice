console.log("\nwelcome User!");
var msg: string ="Hello good morning"
console.log(msg)
console.log("----------------------------------------------------------------------------------------------------\n");
// Addition of Number
var a:number=10;
var b:number=20;
console.log("Addition is :",a+b);
console.log("------------------------------------------------------------------------------------------------------\n");

// class object
class Myclass
{
    display():void
    {
        console.log("Hello! from function");
    }
}
var obj=new Myclass();
obj.display();

// enum
enum fruits
{
    apple=1,
    banana,
    kiwi,
}
let fruit_name:string=fruits[2]
console.log(fruit_name)
console.log("--------------------------------------------------------------------------------------------------\n");

// function in ts
function Addition(a,b)
{
    return a*b;
}
var addition:number=Addition(3,4);
console.log(addition);
