/*var a;
a=10;
vaar a =20;
console.log(a);
let b;
b=30;
b=40;
console.log(b);
const c=20;
console.log(c);

function sum(x,y){
    console.log("Hello World");
}
var sum1=()=>{
    console.log("Hello World");
}
sum();
sum1();
var num=5;
var result= num/2===0 ? "Even" : "Odd";
console.log(result);

//spread operator
var arr=[1,2,3,4,5];
var arr2=[...arr,6];
console.log(arr);
console.log(arr2);


var marks=[10,20,30,40,50];
var [a,b,c,d,e]=marks;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


function demo(){
    console.log("Hello World");
}
var callBack=(func)=>{
    console.log("Hello from callBack")
    func();
}
callBack(demo);
*/

//map
var arr=[1,2,3,4,5];
var double=arr.map(num => num * 2)
console.log(double);



//filter
var odd=double.filter(double => double > 5);
console.log(odd);

//reduce
var total=odd.reduce((val,odd) => val + odd, 0);
console.log(total);