         //Vars
         const year = 2021;

         let name = prompt("Write your name:");
         console.log("Setting value to variable name: " + name);

         let birthYear = prompt("Write your year of birth:");
         console.log("Setting value to variable birthYear: " + birthYear);

         let age  = year - parseInt(birthYear);
         console.log("Calculating age: 2021-"+birthYear+"=" + age);

         //Conditional

         // If are under age of 18
         if(age<18){

         //ouput String
         console.log("Under legal age.");
         console.log("Generating OutputString...");
         output = "Hi "+name+"! You are under legal age of 18, your age is "+ age +"!.";
         console.log(output);

         }
         // Over age of 18
         else{

         console.log("Over legal age.");
         console.log("Generating OutputString...");
         output = "Hi "+name+"! You are over legal age of 18, your age is "+ age +"!.";
         console.log(output);

         }
         //Alert Box
         alert(output);

         //Add ouput to h1 element
         console.log("Setting output value to h1 element: " + output);
         document.getElementById("textFront").innerHTML = output;
