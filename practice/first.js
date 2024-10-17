//Single line code
/*
 Multiple line code 
 */
/*
let a = 1000;
let b= 95;
let c = 89;
// CONDITIONAL STMT  
if(a<b)
{
     console.log("a is less than b");
}
else if(b<c)
{
     console.log("b is less than c ");
}
else if(c<a)
{
console.log("c is less rthan a ");
}
else
{
     console.log("all are equal to each other ");
}
let age = 18;
let result = age >=18 ? "adult":"not adult"; 
console.log(result);

let p = prompt("Please enter the number ");
if (p%5 == 0)
{
     console.log("Welcome to our page >>>>>>");
}
else
{
     console.log("sorry the number is not multiple of 5 Please enter a nimber whicj is multiple of 5 ..")
}

//for loop
for (let i=1; i<=5; i++)
{
     console.log("*"); // its execulte 5 times  
}

let sum =0;
for (let j=1; j<=5; j++)
{
     sum = sum +j;
     console.log("Sum of 1 to 5 are =",sum);  
}
// while loop
let i =0;
while(i<=5)
{
     console.log("Number are ",i);
     i++;
}
//do while loop
console.log("do while lopp");
let j =0;
do
{
     
     console.log("Number are ",j); 
     j++;
}
while(j<=5);
//for of loop for string
console.log("for-of lopp");
let str = "shruti";
let size = 0;
for(let i of str)
{
     console.log(i);
     size++;
}
console.log('size=',size);
// for-in loop for array and object
console.log("For-in loop");
let student =
{
     name:"Shruti Mehta",
     age : 20,
     favcolor:"yellow",
     favlanguage :"java"
};
for(let i in student)
{
     console.log(i,"values=",student[i]);
}
    
    for(i=0;i = i<=100;i++)
    {
          if(i%2==0)
          {
               console.log("even number are ",i);
          }
    } 
   let cv = 810;
   let value = prompt("Enter the number");
   while(cv !== value)
   {

   }
   console.log("please enter correct value ............");
  
  let str = "shrutimehta";
  //templetalet
  let sentence = `this is special sentence `;
  console.log(sentence);
  console.log(typeof(sentence)); 
  let obj ={
     item:"pen",
price:50  };
let output = `the cost ${obj.item} is ${obj.price} ruppese`;
console.log(output);
console.log(obj.item,obj.price);
console.log("shruti \n mehta");
// string method
let str = "shruti";
let str1 ="MEHTA";
let str2 ="Shruti mehta     ";
console.log("the str in upper case",str.toUpperCase());
console.log("the str in lower case",str1.toLowerCase());
console.log("the used of trim method",str2.trim());
console.log("the used of trim method",str2.trim());
console.log("the spilt mehthod",str.slice(0,3));
console.log("the str concationation",str.concat(str1));
console.log("the str replace words",str.replace("i","a"));

// practice question
let username = prompt("enter the name");
console.log("username = ",username);
let str = "@";
let newname = str.concat(username);
console.log("New username generated is ",newname); 

// array
let marks = [20,30,44,49,36];
console.log("marks are:",marks);
console.log("marks 2 :",marks[2]);
let info = ["abc",26,89,"xzy",69];
console.log("info are:",info);
for(i=0;i<=5;i++)
{
     console.log("Marks are using loops:",marks[i]);
}
console.log("revesre array");
for(i=4;i<=0;i--)
     {
          console.log("Marks are using loops:",marks[i]);
     }
     // practiace question
     let marks =[85,97,44,37,76,60];
     for(i=0;i<=5;i++)
     {
          let sum = marks[i];
          let avg = sum/5;
          console.log("avg marks are:" ,avg);
     }
    let price = [250,645,300,900,50];
    for (let val of price)
    {
     off = val /10;
     price[i] = price[i]-off;
     console.log("price after the offer",off);
     i++;
    }
     let price = [250,645,300,900,50];
     console.log("push operation",price.push(977));
     console.log("\n" ,price);
     console.log("pop operation",price.pop());
     console.log("\n" ,price);
     let str = price.toString();
     console.log("\n" ,str);
     console.log("\n" ,typeof(str));
     let p1 = [89,65,32];
     console.log("concateation of 2 array",price.concat(p1));
     console.log()
     
     // function
     function demo() //function created 
     {
          console.log("function called");
     }
     console.log("function not called");
     demo(); //function called
//functoon with argument
     function demo(msg) //function created 
     {
          console.log(msg);
     }
     console.log("function not called");
     demo("i am learning java script    "); //function called
     
    function sum(a,b)
    {
     console.log("sum of a and bare =",a+b);
    }
    sum(2,10);

    function sub(x,y)
    {
          s = x-y;
          console.log("return stmt");
          return s;
    }
    let val = sub(10,5);
    console.log(val);

    function sum(a,b)
    {
     return a+b;
    }
    // arraw function
const arrowsum = (a,b) =>{
     console.log(a+b);
}
    function mul(a,b)
    {
     return a*b;
    }

    const amul = (a,b) => {
     console.log(a*b);
    };
    // practice question

    function check(str)
    {
     let count = 0; 
      for (const char of str)
      {
          if(char ==="a" || char ==="e" ||char ==="i" ||char ==="o" ||char ==="u")
           count++;
      }
      console.log("Number of vowles are:",count);
    }
  // using arraow function
  let check1 = (str) =>{
     let count = 0; 
     for (const char of str)
     {
         if(char ==="a" || char ==="e" ||char ==="i" ||char ==="o" ||char ==="u")
          count++;
     }
     console.log("Number of vowles are:",count);
  }  */
 //for each loop 
/* let a = [1,2,3,4,5,6];
 a.forEach((val,ind,arr) => 
{
     console.log(val,ind,arr );     
 });
 // pratice question
 let num = [1,2,3,4,5];
 num.forEach((val) => 
{
     let mul = val * val ;
     console.log(mul);
})
// map method for array
let num = [1,2,3,4,5];
num.map((val) => 
     {
          console.log(val);
     })
     // storing reult in new array and printing it 
let num1 = [1,2,3,4,5];
let newnum = num1.map((val) => 
          {
               return val;
          }
     );
     console.log("new one");
     console.log(newnum);
     // filter method 
     let num1 = [1,2,3,4,5];
    let num =  num1.filter((val) =>
     {
          return val % 2 == 0;
     });
     console.log("new array conating even number are :",num) ; 
     // practice question
     let marks = [99,95,78,69,32,76];
     let firstclass = marks.filter((val)=>
     {
          return val > 90;
     });
     console.log(firstclass);

//DOM CONCEPTS
//console.log(window);
//console.dir(window.document.body);//for special 1 to access
let i1 = document.getElementById("i1");
//console.dir(i1);
let heading = document.getElementsByClassName("h");
//console.dir(heading);
//console.log(heading);
let pargarph = document.getElementsByTagName("p");
//console.dir(pargarph);
let elemnt = document.querySelector("p"); // return first element releated to given
//console.dir(elemnt);
let element1 = document.querySelectorAll("p") // return nodelist 
//console.dir(element1); 
let element2 = document.querySelectorAll("div") 
//console.dir(element2);*/
//practice question
//let h2 = document.querySelector("h2");
//console.dir(h2);
//h2.innerText = h2.innerText + "From Apana College";

/*let divs = document.querySelectorAll("div");
console.dir(divs);

divs[1].innerText = "value of 1";
divs[2].innerText = "value of 2";*
//let div = document.querySelector("div");
//console.dir(div);
div.style.backgroundColor="lightblue";
let id = div.getAttribute("id");
//console.dir(id);
let p = document.querySelector("p");
//console.dir(p);
let c = p.setAttribute("class","demo")
//console.dir(c);
//dom mainpulation (insertion)
let el = document.createElement("button");
el.innerText="click me";
console.dir(el);
let div = document.querySelector("div");
div.after(el);//append,prepaend,befor,after are method to add something in page using js
let h2 = document.querySelector("h2");
h2.before("helolo").prepend();*/
// practice question
//1
/*
let h2 = document.querySelector("h2");
let btn = document.createElement("button");
btn.innerText="click me";
btn.style.color="white";
btn.style.backgroundColor="red";
h2.before(btn);
//2
let par = document.querySelector("p");
par.getAttribute("class");*/
//events

let btn1 = document.querySelector("#btn1");
/*btn1.onclick = (e)  =>
{
console.log("button was clicked");
console.log(e.type);
console.log(e.target);
}
*/
/*
//event listener 
btn1.addEventListener("click", (e) =>{
     console.log("button was clicked");
     console.log(e.type);
     console.log(e.target);   
})
btn1.addEventListener("click", (e) =>{
     console.log("button was clicked 2");
     console.log(e.type);
     console.log(e.target);   
})
btn1.addEventListener("click", (e) =>{
     console.log("button was clicked 3");
     console.log(e.type);
     console.log(e.target);   
})
const three = btn1.addEventListener("click", (e) =>{
     console.log("button was clicked 4");
     console.log(e.type);
     console.log(e.target);   
})
*/
//practice question 
/*
let mode=document.querySelector("#mode");
let cm="light";//dark
mode.addEventListener("click",() =>{
     if(cm === "light")
     {
             cm ="dark";
             document.querySelector("body").style.backgroundColor="black";
     }
     else
     {
          cm="light";
          document.querySelector("body").style.backgroundColor="white";
     }
})
console.log(cm);*/
//class & object
// this keywords are used to refer to ibject of that class foe ex we have stu class in which there is marks and we weite this.marks which means marks of stu
     //prototype object inside object 
/*const emp ={
 calcTax() {
     console.log("hii");
 },
};
const shruti =
{
     salarey:5000,
};
shruti.__proto__=emp;*/
//how to used or create class
/*
class Car{
     //function
     constructor(brand)
     {
          console.log("construction created");   
          this.brand = brand; 
     }
     start(){
          console.log("car start");
     }
     stop(){
          console.log("CAR STOP");
     }
}
let xyz = new Car("ABC");
let d = new Car();*/
//inheretence
/*
class dog{
     eat(){
          console.log("EATING");
     }
}
class puppy extends dog{
     burnk()
     {
          console.log("BARKING");
     }
}
let abc = new puppy();*/
//callback,async,promise
/*
function getdata(dataid,getnextdata)
{
     //takes time of 2sec to display 
     //this is called callback hell 
     setTimeout(()=>{
          console.log("data",dataid);
          if(getnextdata){
          getnextdata();}
     },2000)
}// bulid an code in wehich 1 i get data for 1 then for then for 3 (1 by 1 data )
getdata(1,()=>{
     getdata(2)
});*/
//PROMISE 
/*let promise = new Promise((resolve,reject)=>{
console.log("oi am promise");
resolve(1230);
reject("there is error");
})*/
// promise chai 
/*
function asuncfun()
{
     return promise = new Promise((resolve,reject)=>{
               setTimeout(()=>{
                    console.log("data1");
                    resolve("sucess");
               },2000)
     });
}
console.log("getting data 1");
let p = asuncfun();
p.then((res)=>{
     console.log(res);
})*/
//ASYNC FUNCTION
/*async function hello()
{
     console.log("hello");
}
     //using await keyword 
function api1()
{
     return new Promise(()=>{
          setTimeout(()=>{
               console.log("weather done ");
               resolve(200);
          },2000)
     });
}
async function getweatherdata()
{
  await api1();   
}*/
//API
const url ="https://alexwohlbruck.github.io/cat-facts/docs/"; //api url
let promise = fetch(url);
console.log(promise);
//to get the fact of cats
const getfacts =async()=>{
     let response = await fetch(url);
     //response is in json object 
     console.log(response.status);
     let data = await response.json(); 
     console.log(data);
}