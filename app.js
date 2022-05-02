console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


  function printOdds(n){

       for (let num = 1 ; num <= n; num++){

       if (num % 2 !== 0){
            console.log(num);       
          }

       }
  }
        
 

printOdds(20);




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age, name ="Guest"){
     if (age >= 16){
          console.log(`Congrats ${name} you can drive!`)
     }else {
          console.log("Sorry you have to be 16 to drive.")
     }

}

checkAge(14)





// Excercise 3 section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x , y){
if(x == 0 || y == 0){
     if(x == 0 && y == 0){
          console.log("Point is on both Axes")
     }else if (x == 0){
          console.log("Point is on the X axis")
     }else if ( y == 0){
          console.log("point is on the Y axis")
     }
}else{

if       ( x > 0 && y > 0){
     console.log("Quadrant 1")
}else if (x < 0 && y > 0){
     console.log("Quadrant 2")
}else if (x < 0 && y < 0){
     console.log("Quadrant 3")
}else if (x > 0 && y < 0){
     console.log("Quadrant 4")
}else{

}

}
}


// Excercise 4 section
console.log("EXERCISE 4:\n==========\n");

function triangle(a,b,c){

     if (a + b < c || a > b + c){
     console.log("Not a triangle")

     }else if(a == b && a == c){
     console.log("Equalateral")

     }else if(a == b || b == c || a == c){
     console.log ("Isosceles")

     }else {
          console.log ("Scalene");
     }
}

triangle(3,3,3)
triangle(2,2,3)
triangle(2,3,4)
triangle(1,2,5)


// Excercise 5 section
console.log("EXERCISE 5:\n==========\n");

const dataPlan = (limit , day , usage) => {

     const cycle = 30;

}




