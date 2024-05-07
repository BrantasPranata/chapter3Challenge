//let sekola = 'sby';

//function generateWelcome(name, age){
 
/*
 if(age > 18){
    return 'youre too old';
 } else {
    return 'welkomena my friend';
 }
}

let var1 = function(ipt1) {

   return ipt1**2;

}


let varx = (input1, input2) => {

   return input1 + input2 + 3 + 4 *20;

    //return knowledge;
}

console.log(varx(10,2));

*/

//console.log(generateWelcome('brantas',19));

/*
//console.log(var1(99));
let var1 = function(ipt1) {

   return ipt1/ipt1;

}

console.log('Ini Baris ke-'+var1(15));


setTimeout(() => { 
   console.log('Ini Baris kedua'); 
}, 1000);

console.log('Ini baris ketiga');

setTimeout(() => { 
   console.log('Ini Baris ke-Empat'); 
}, 200);

setTimeout(() => { 
   console.log('Ini Baris ke-Lima'); 
}, 100);

console.log('Ini baris ke-Enam');


setTimeout(() => {

      // callback function
      function sayName(name) {
         console.log('Hello' + ' Mister ' + name);
      }
   // Callback Function Example
   function greet(name, myFunction) {
      console.log('Hello world');

      // callback function
      // executed only after the greet() is executed
      myFunction(name);
   }



   // calling the function after 2 seconds
   setTimeout(greet, 2000, 'Brantas', sayName);
}, 2500);


var testMult = (i1,i2) => {
   return new Promise((resolve, reject) => {
      if(typeof i1 != 'number' || typeof i2 != 'number'){
         reject(console.error('i1/i2 is not num'))
      }
      var multi = i1 * i2
      resolve(multi)
      }
   )
} 

testMult(4,16)
   .then((resp) => console.log(resp))
   .catch((err) => console.error(err))


const innerPromise = new Promise((resolve, reject) => {
   if (2 + 2 === 4) {
     resolve('Success!');
   } else {
     reject('Something went wrong..');
   }
 });
 
 const outerPromise = Promise.resolve(innerPromise);
 
 outerPromise
   .then((result) => {
     console.log(result);
   })
   .catch((err) => {
     console.log(err);
   });
 
 // Output: Success!
*/

async function runProcess() {
   try {
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
     const json = await response.json();
     console.log(json);
   } catch (error) {
     console.log(error);
   }
 }
 
 runProcess();