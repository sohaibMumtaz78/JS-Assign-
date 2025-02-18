// document.write("Hello World")


//Q1
// var cityName = prompt("Enter City Name ").trim().toLowerCase();
//     // cityLight = Karachi;

// if (cityName === "karachi"){
//     document.write("Welcome to city of lights");

// }
// else{
//     document.write("Welcome to " + cityName);
// }

//Q2
// var gender = prompt("Enter your Gender ").trim().toLowerCase();
// if (gender === "male"){
//     document.write("Good Morning Sir");
// }    else if(gender === "female"){
//         document.write("Good Morning Mam'm");
// }else{
//     document.write("Please write gender")
// }


//Q3
// var trafficSignal = prompt("Enter traffic light color").trim().toLowerCase();
// if (trafficSignal === "red"){
//     document.write("Must Stop");
// }   else if(trafficSignal === "yellow"){
//     document.write("Ready to move");
// }else if(trafficSignal === "green"){
//     document.write("Move now")
// }else{
//     document.write("Please enter traffic light color correct");
// }

//Q4
// var carFuel = +prompt("Enter remaining fuel in litre");
// if (carFuel <= 0.25 ){
//     document.write("Please refill the fuel in your car")
// }else{
//     document.write("You have enough fuels")
// }


//Q5
//a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//     alert("given condition is wrong")
// }

//c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

//d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals"); //totalCost does'nt equal to laborCost & materialCost
// }

//e
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//Q6
// var obtainMarks1 = +prompt("Enter Obtain Marks of 1st Subject");
// obtainMarks2 = +prompt("Enter obtain marks of 2nd subject");
// obtainMarks3 = +prompt("Enter obtain marks of 3rd subject");
// totalMarks = +prompt("Enter Total Marks");

// obtainmarks = obtainMarks1 + obtainMarks2 + obtainMarks3
// percentage = ((obtainmarks * 100) / totalMarks);

// document.write("<h2>MarksSheet</h2>")
// document.write("Total Marks : " + totalMarks + " </br>");
// document.write("Marks Obtain : " + obtainmarks + " </br>");
// document.write("percentage : " + percentage.toFixed(2) + " </br>");


// if (percentage >= "90%") {
//     document.write("Remarks : Good result </br>");
// } else if (percentage >= "89%") {
//     document.write("Remarks : Much Better");
// } else if (percentage >= "79%") {
//     document.write("Remarks : You Need to improve </br>");
// } else if (percentage >= "69%") {
//     document.write("Remarks : You Need to improve </br>");
// }
// else {
//     document.write("Remarks : You are fail. Better luck next time </br>");
// }

//Q8
// var num = +prompt("Enter Number for divisible by 3");
// if (num % 3 === 0){
//     document.write("Number is divisible by 3 : " + num);
// }else{
//     document.write("Number is not divisible by 3 : " + num);
// }

//Q9
// var num = +prompt("Enter Number");
// if (num % 2  === 0){
//     document.write("Number is even : " + num);
// }else {
//     document.write("Number is Odd : " + num)
// }

//Q10
// var temp = +prompt("Enter Today wheather Temperature");
// if (temp >= "40"){
//     document.write("It is too hot outside.Temp : " + temp)
// }else if(temp >= "30"){
//     document.write("The Weather today is Normal.Temp : " + temp)
// }else if(temp >= "20"){
//     document.write("Today’s Weather is cool.Temp : " + temp)
// }else if(temp >= "10"){
//     document.write("OMG! Today’s weather is so Cool.Temp : " + temp)
// }

//Q11
// var num1 = +prompt("Enter First Number ");
//     num2 = +prompt("Enter Second Number ");
//     symbol = prompt("Enter Sign for operstion ")
//     if(symbol === "+"){
//         add = num1 + num2;
//         document.write("Addition Value is : " + add);
//     }else if(symbol === "-"){
//         sub = num1 - num2;
//         document.write("Subtraction value is : " + sub);
//     }else if(symbol === "*"){
//         mul = num1 * num2;
//         document.write("Multiplication Value is : " + mul);
//     }else if(symbol === "/"){
//         div = num1 / num2;
//         document.write("Division value is : " + div);
//     }else if(symbol === "%"){
//         mod = num1 % num2;
//         document.write("modulus value is : " + mod);
//     }