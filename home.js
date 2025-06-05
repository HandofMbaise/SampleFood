// const button = document.querySelectorAll('button');


// button[0] .addEventListener('click', () => {
//     setInterval( () => {
//         window.alert('Order placed')
//     }, 3000)
// })




// btn = document.getElementById("btn");


// btn.onclick = function(){
//     console.log("Order placed")
//     btn.textContent = "order placed"
// }

// btn = document.getElementsByClassName("btn");

// btn[0].onclick = function(){
//     btn[0].textContent = "Order placed";
//     btn[0] = window.alert("Order placed");
// }
// btn[1].onclick = function(){
//     btn[1].textContent = "Order placed";
//     btn[1] = window.alert("Order placed");
// }
// btn[2].onclick = function(){
//     btn[2].textContent = "Order placed";
//     btn[2] = window.alert("Order placed");
// }
// btn[3].onclick = function(){
//     btn[3].textContent = "Order Placed"
//     btn[3] = window.alert("Order Placed");
// }

// btn[4].onclick = function(){
// btn[4].textContent = "Order Placed";
// btn[4] = window.alert("Order Placed");
// }

// btn[5].onclick = function(){
//     btn[5].textContent = "Order placed";
//     btn[5] = window.alert("Order placed");
// }
// btn[6].onclick = function(){
//     btn[6].textContent = "Order placed";
//     btn[6] = window.alert("Order placed");
// }
// btn[7].onclick = function(){
//     btn[7].textContent = "Order placed";
//     btn[7] = window.alert("Order placed");
// }
// btn[8].onclick = function(){
//     btn[8].textContent = "Order placed";
//     btn[8] = window.alert("Order placed");
// }

const userId = document.getElementById('user-Id');
const user = JSON.parse(localStorage.getItem('token'));

const button = document.querySelectorAll('button');
const td = document.querySelectorAll('td');
const restricted = document.getElementsByClassName('restricted')
let Qty = 1;
let amt = 0;

restricted[0].onclick = function(){
  window.alert('Only admins can access this page')
}

restricted[1].onclick = function(){
  window.alert('Only admins can access this page')
}

function data1(){
  button[0].disabled = true;
  setTimeout(function(){
      button[0].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[0].textContent = 'Order'
      button[0].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Pizza';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=10;
    }, 4000);

    window.location.href = '#order'
}


button[0].addEventListener('click', function(){
    data1()
});

function data2(){
  button[1].disabled = true;
  setTimeout(function(){
      button[1].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[1].textContent = 'Order'
      button[1].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Pizza&Coke';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=20;
    }, 4000);

     window.location.href = '#order'
}


button[1].addEventListener('click', function(){
    data2()
});

function data3(){

  button[2].disabled = true;
  setTimeout(function(){
      button[2].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[2].textContent = 'Order'
      button[2].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Pizza Pack';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=30;
    }, 4000);
     window.location.href = '#order'
}


button[2].addEventListener('click', function(){
    data3()
});


function data4(){

  button[3].disabled = true;
  setTimeout(function(){
      button[3].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[3].textContent = 'Order'
      button[3].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Pizza Pan';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=15;
    }, 4000);
     window.location.href = '#order'
}


button[3].addEventListener('click', function(){
    data4()
});


function data5(){

  button[4].disabled = true;
  setTimeout(function(){
      button[4].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[4].textContent = 'Order'
      button[4].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Chicken Pie';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=15;
    }, 4000);
     window.location.href = '#order'
}


button[4].addEventListener('click', function(){
    data5()
});


function data6(){

  button[5].disabled = true;
  setTimeout(function(){
      button[5].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[5].textContent = 'Order'
      button[5].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Meat Pie';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=10;
    }, 4000);
     window.location.href = '#order'
}


button[5].addEventListener('click', function(){
    data6()
});


function data7(){

  button[6].disabled = true;
  setTimeout(function(){
      button[6].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[6].textContent = 'Order'
      button[6].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Pizza Pack';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=10;
    }, 4000);
     window.location.href = '#order'
}


button[6].addEventListener('click', function(){
    data7()
});


function data8(){

  button[7].disabled = true;
  setTimeout(function(){
      button[7].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[7].textContent = 'Order'
      button[7].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Pizza Pack';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=30;
    }, 4000);
     window.location.href = '#order'
}


button[7].addEventListener('click', function(){
    data8()
});



function data9(){

  button[8].disabled = true;
  setTimeout(function(){
      button[2].textContent = 'proces...'
  }, 2000);

  setTimeout(function(){
      button[8].textContent = 'Order'
      button[8].disabled = false;
      window.alert('Order sucessful');
  }, 3000);

    setTimeout( () => {
    td[7].textContent = 'Pizza';
    td[8].textContent = Qty++;
    td[9].textContent = amt+=10;
    }, 4000);
     window.location.href = '#order'
}


button[8].addEventListener('click', function(){
    data9()
});

if(localStorage.getItem('token') === null){
  window.alert('Unauthorized user!! register and login again');
  window.location.href = 'register.html'

} else{
   userId.textContent = user.newemail;
}



function Timeout(){
  setTimeout(() => {
    window.alert('Storage timeout you will be redirected soon');
    localStorage.removeItem('user');
  }, 50000)

  setTimeout(() => {
    localStorage.removeItem('token');
  }, 60000)
}

Timeout();

  // Basic callback function.

// function fun1(callback){
//     console.log('Wassup');
//     callback()
// }


// function fun2(){
//   setTimeout( () => console.log('Yeah'), 3000)
// }

// fun1(fun2);



// Callback hell function.

// function task1(callback){
//   setTimeout(() => {
//     console.log('task 1 completed');
//     callback();
//   }, 3000)
// }

// function task2(callback){
//   setTimeout(() => {
//     console.log('task 2 completed');
//     callback();
//   }, 2500)
// }

// function task3(callback){
//   setTimeout(() => {
//     console.log('task 3 completed');
//     callback();
//   }, 1000)
// }

// function task4(callback){
//   setTimeout(() => {
//     console.log('task 4 completed');
//     callback();
//   }, 1500)
// }

// function completed(){
//    setTimeout(() => {
//     console.log('All 4 tasks completed')
//    }, 3500)
// }


// task1( () => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         completed()
//       })
//     })
//   })
// });


// Chain (then) method.

// function walkdog(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('you walk the dog')
//     }, 3000)
//   });
// };


// function cleanroom(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('you cleaned the room')
//     }, 2500)
//   });
// };


// function taketrash(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('you took the trash')
//     }, 2000)
//   });
// };



// walkdog().then(value => {console.log(value); 
//   return cleanroom()
// }).then(value => {console.log(value);
//   return taketrash()
// }).then(value => {console.log(value);
//   console.log('you finished all the chores')
// });



// Chain (then).catch error method.

// function walkdog(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogwalked = true;
//       if(dogwalked){
//         resolve('you walked the dog')

//       } else{
//         reject('you did not walked the dog')
//       }
//     }, 3000)
//   });
// };


// function cleanroom(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const roomcleaned = true;
//       if(roomcleaned){
//       resolve('you cleaned the room')

//      } else{
//       reject('you did not clean the room')
//      }

//     }, 2500)
//   });
// };


// function taketrash(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashtaken = true;
//       if(trashtaken){
//       resolve('you took the trash')

//     } else{
//       reject('you did not take the trash')
//     }
//     }, 2000)
//   });
// };



// walkdog().then(value => {console.log(value); 
//   return cleanroom()
// }).then(value => {console.log(value);
//   return taketrash()
// }).then(value => {console.log(value);
//   console.log('you finished all the chores')
// }).catch(error => console.error(error))


// Async await method.

// function walkdog(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogwalked = true;
//       if(dogwalked){
//         resolve('you walked the dog')

//       } else{
//         reject('you did not walked the dog')
//       }
//     }, 3000)
//   });
// };


// function cleanroom(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const roomcleaned = true;
//       if(roomcleaned){
//       resolve('you cleaned the room')

//      } else{
//       reject('you did not clean the room')
//      }

//     }, 2500)
//   });
// };


// function taketrash(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashtaken = false;
//       if(trashtaken){
//       resolve('you took the trash')

//     } else{
//       reject('you did not take the trash')
//     }
//     }, 2000)
//   });
// };



// Async with try block.

// async function dochores(){
//   try{
//   const walkdogresult = await walkdog();
//   console.log(walkdogresult);
  
//   const cleanroomresult = await cleanroom();
//   console.log(cleanroomresult);

//   const taketrashresult = await taketrash();
//   console.log(taketrashresult)
  
//   console.log('All chores completed');

// } catch(error){
//   console.error(error)
// }

// }

// dochores();


// Async without try block.

// async function dochores(){
//   const walkdogresult = await walkdog();
//   console.log(walkdogresult);
  
//   const cleanroomresult = await cleanroom();
//   console.log(cleanroomresult);

//   const taketrashresult = await taketrash();
//   console.log(taketrashresult)
  
//   console.log('All chores completed');
// }

// dochores();


// illustration code for the continual 
// execution of codes in an 
// async await function, even when
// a promise is rejected and
// some codes are not being executed.

// function check(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//         const Bob = 4;
//         if(Bob == 4){
//             resolve('Bob correct')
//         }
//         else{
//             reject('Bob not correct')
//         }
//     }, 3000)
//     })
// }



// function check1(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//         const Bob = 3;
//         if(Bob == 4){
//             resolve('Bob1 correct')
//         }
//         else{
//             reject('Bob1 not correct')
//         }
//     }, 9000)
//     })
   
// }





// function check2(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//         const Bob = 4;
//         if(Bob == 4){
//             resolve('Bob2 correct')
//         }
//         else{
//             reject('Bob2 not correct')
//         }
//     }, 6000)
//     })
   
// }



// async function patch(){
//     try{
// const Bobresult = await check();
// window.alert(Bobresult);
//     } catch(err){
//         window.alert(err)
//     }
    
//     try{
// const Bob1result = await check1();
// window.alert(Bob1result);
//     } catch(err){
//         window.alert(err)
//     }
//     try {
// const Bob2result = await check2();
// window.alert(Bob2result);

// } catch(err){
//     window.alert(err)
// }

// }

// patch ();




// Simple setTimeout function without 
// putting it into any function.

// setTimeout( () => console.log('Hello'), 3000);






// JAVASCRIPT CONCEPT AND METHOD.

   // FOR LOOP.

// for(let i = 0; i < 5; i++){
//     console.log(i)
// };

// for(let username = 0; username < 5; username++){
//     console.log(username)
// };


  // FOR IN LOOP.

//    let person = { name: 'john', age: 30, city: 'Lagos'}

//    for(let prop in person){
//     console.log(`${prop}: ${person[prop]}`)
//    };


  //  FOR OF LOOP.

    //   let colors = ['red', 'green', 'blue'];

    //   for(let color of colors){
    //     console.log(color)
    //   };


    // THIS KEYWORD.

        //  function Person(name, age){
        //    this.name = name;
        //    this.age = age;
        // }

        // let person = new Person('john', 30);
        // console.log(person.name);


    // THEN METHOD.

    // let promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('Hello world')
    //   }, 4000)
    // });

    // promise.then((message) => {
    //   console.log(message);
    // });


    // WHILE LOOP.

    // let i = 0;
    // while(i < 10){
    //   i++
    //   console.log(i)
    // };


    // DO WHILE LOOP.

    // let i = 0;
    // do {
    //   console.log(i);
    //   i++;
      
    // } while(i < 5);

  
   // FOR EACH METHOD.

  //  let numbers = [1, 2, 3, 4, 5];

  //  numbers.forEach((number, index) => {
  //   console.log(`Number ${index} ${number}`)
  //  });

  //  const button = document.querySelectorAll('button');

  //  button.forEach(button => {button.onclick = function Trump(){
  //   console.log('TRUMP WON!')
  //  }});
   
  // function Each(){
  //   console.log('FOR EACH WORKED!')
  // }

  //  button.forEach(button => {button.addEventListener('click', Each)});

   
  // SORT METHOD.

  // let numbers = [4, 2, 7, 1, 3];
  // numbers.sort((a, b) => a - b);
  // console.log(numbers); 

  // let fruits = ['banana', 'apple', 'cherry', 'date'];
  // fruits.sort();
  // console.log(fruits);


  // const numbers1 = [64, 34, 25, 12, 11, 64, 90];

  // numbers1.sort((a, b) => a - b);

  // console.log(numbers1);


  // const numbers2 = [64, 34, 25, 12, 11, 64, 90];

  // numbers2.sort((a, b) => b - a);

  // console.log(numbers2);


  // MAP METHOD.

  // const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares);


   // FILTER.

  //  let numbers = [1, 2, 3, 4, 5];
  //  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  //  console.log(evenNumbers);


  // REDUCE.

  // let numbers = [1, 2, 3, 4, 5];
  // let sum =
  // numbers.reduce((accumulator, current) => accumulator + current, 0);
  // console.log(sum);


  // SOME.

  // let numbers = [1, 2, 3, 4, 5];
  // let hasEvenNumber = numbers.some((number) => number % 2 === 0);
  // console.log(hasEvenNumber);


  // EVERY.

  // let numbers = [1, 2, 3, 4, 5];
  // let allEvenNumber = numbers.every((number) => number % 2 === 0);
  // console.log(allEvenNumber);


  // FIND.

  // let numbers = [1, 2, 3, 4, 5];
  // let firstEvenNumber = numbers.find((number) => number % 2 === 0);
  // console.log(firstEvenNumber);


  // FIND INDEX.

  // let numbers = [1, 2, 3, 4, 5];
  // let indexFirstEvenNumber = numbers.findIndex((number) => number % 2 === 0);
  // console.log(indexFirstEvenNumber);


  // INCLUDES.

  // let numbers = [1, 2, 3, 4, 5];
  // console.log(numbers.includes(3));
  // console.log(numbers.includes(6));


  // OBJECT.

  // const person1 = {
  //   firstName: "Akpamu",
  //   lastName:  "OTU",
  //   age: 30,
  //   isEmployed: true,
  //   sayHello: function(){console.log('Hello Akpamu')},
  // }


  // const person2 = {
  //   firstName: "Kalu",
  //   lastName:  "Maggie",
  //   age: 40,
  //   isEmployed: false,
  //   sayHello: function(){console.log('Hello Maggie')},
  // }

  // person1.sayHello();
  // person2.sayHello();

  // console.log(person1.firstName);
  // console.log(person1.lastName);
  // console.log(person1.age);
  // console.log(person1.isEmployed);

  // console.log(person2.firstName);
  // console.log(person2.lastName);
  // console.log(person2.age);
  // console.log(person2.isEmployed);


  // SRTING SLICING.

  // const fullName = 'Akpamu Eric';


  // let firstName = fullName.slice(0, 7);
  // let lastName = fullName.slice(7, 11);

  // let firstChar = fullName.slice(0, 1);
  // let lastChar = fullName.slice(-1);

  // console.log(firstName);
  // console.log(lastName);
  // console.log(firstChar);
  // console.log(lastChar);


  // JAVASCRIPT ARRAY METHOD.

// const array = [ 1, 2, 3, 4, 5 ];

// console.log(array); // Log all array elements.
// console.log(array.push(6)); // Add an element to the end.
// console.log(array.pop());  // Remove last element.
// console.log(array.shift()); // Remove first element.
// console.log(array.unshift(1)); // Add element to the begininig.
// console.log(array.concat([6, 7])); // Returns new array.
// console.log(array.slice(1, 3)); // Slice elements from [1] to [3-1].
// console.log(array.splice(1, 2)); // Add elements together.
// console.log(array.reverse()); // Sort in descending order.
// console.log(array.sort()); // Sort string alphabetically.
// console.log(array.indexOf(4)); // Finds index of an element
// console.log(array.includes(3)); // Check if array contains or includes a specific element.
// console.log(array.find(x => x > 4)); // Finds an element.
// console.log(array.filter(x => x > 1)); // Filters an element.
// console.log(array.map(x => x * 2)); // Map elements.
// console.log(array.reduce((sum, x ) => sum + x, 0)); // Reduces all elements to a single value.
// console.log(array.join('-')); // Joins elements.
// console.log(array.every(x => x > 2)); // Tests all elements based on condition.
// console.log(array.findIndex(x => x > 4)); // Finds index of an element based on condition.
// console.log(array.fill(5)); // Fill every element.
// console.log(array.copyWithin(0, 1));
// console.log(array.flatMap(x => [x, x = 2]));
// console.log(array.entries());
// console.log(array.keys());
// console.log(array.values());


// Split method.

// let Str = 'a,b,c,d'; // Splits a sting into an array.
// console.log(Str.split(','))


// JSON methods.

// let object = { name: "john", age: 30 };
// console.log(object.name)
// let jsonStrings = JSON.stringify(object);
// console.log(jsonStrings);

// let jsonStrings = '{ "name": "john", "age": 30 }';
// let object = JSON.parse(jsonStrings);
// console.log(object);
// console.log(object.name)


// Date methods.

// let date = new Date();
// console.log(date.getDate());

// let date = new Date();
// console.log(date.getFullYear());

// let date = new Date();
// console.log(date.getTime());

// let date = new Date();
// date.setDate(29)
// console.log(date);