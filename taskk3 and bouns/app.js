// setInterval is async func and it runs in the background you give it a
//function and a time interval and it will perform the function every time interval
setInterval(()=>console.log('here1'),2000);


// setTimeout is async func and it runs in the background you give it a function and it will perform the 
//function and a time interval and it will perform the function after time interval
setTimeout(()=>console.log('here'),2000);




// pouns ques 

//clousers 
/*
in programming lang you expect the following code not to work how erver in js that is not the case 
because in js the function crerate it is own clousers where it besically takes what it needs from it outer scope and 
copy it into it own scope so even when hello is done and counter is deleted the t will still have a copy to it 
so it will keep running
*/

function hello(x) {
  let counter = x;
  let t = () =>{
    counter++;
    console.log(counter);
  }
  console.log(counter)
  return t;
}

let hi = hello(3);
hi();
hi();


/*
hoistion in js is that the interpreter will move the declaration of the variable to the top of the scope
so you can access it before it is declared in this produces a problems like the one above where you can access counter before it is declared
in ES6 you can use let and const to declare variables and they will be hoisted
but let will prevent you from declaring the same variable twice
and will prevent you from accessing it before declartion 
howerever var will not and will run and give you undefined
and hoistion will be done to to functions too so you can use the function before it is declared
*/


console.log(x);
var x =2;


// this will give an error 
// console.log(x);
// let x = 2;


//hoisting for a function 
myfnc();
function myfnc()
{
    console.log('here');
}






