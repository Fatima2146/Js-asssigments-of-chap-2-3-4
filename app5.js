// Chapter 5:
// Question 1.    "ADDITION"
let a = 3;
let  b= 5;
let add = a + b;
document.write("the addition of 3 and 5 is   " + add ,"<br>");

// Question 2.     "SUBTRACTION"
let c = 3;
let  d= 5;
let sub = a - b;
document.write("the subtraction of 3 and 5 is   " + sub,"<br>");
//                  "MULTIPLICATION"
let e = 3;
let f = 5;
let mul = a * b;
document.write("the multiplication of 3 and 5 is   " + mul,"<br>");
//                   "DIVISION"
let g = 3;
let h = 5;
let div = a / b;
document.write("the division of 3 and 5 is   " + div,"<br>");
//                    "MODULUS"
let i = 3;
let j = 5;
let mod = a % b;
document.write("the modulus of 3 and 5 is   " + mod , "<br>", "<br>");

// Question 3.
let value;
document.write("Value after variable declaration is undefined","<br>");
let ini = 5;
ini ++;
ini + 7;
--ini;
ini / 3;
document.write("Initial value is: 5.", "<br>","Value after incrememt is 6" , "<br>","Value after addition is 13","<br>", "Value after decrement is 12","<br>","The remainder is: 0", "<br>", "<br>");

// Question 4.
let one = 600;
let two = 5;
document.write("Total cost to buy 5 tickets to a movie is " + one * two + "PKR" , "<br>", "<br>");

// Question 5.
let num = prompt("enter a number")
for(let i = 1; i<=10; i++){
document.write(num + " X " + i + " = "+ num*i +"<br>");
 }
// Question 6.
let celsi = 70;
let fah =  212;
document.write("<br>","36C is  " + (celsi * 9 / 5) + 32 + "F");
document.write("<br>","212F is  " + (fah - 32) * 5 / 9 + "C","<br>","<br>");

// Question 7.
document.write(" 'SHOPPING CART:' ","<br>")
let price = 650;
let quan = 3;
let price2 = 100;
let quan2 = 7;
let dc = 100;
document.write("price of item 1 is " + price , "<br>" , "Quantity of item 1 is " + quan , "<br>" + "price of item 2 is " + price2 , "<br>" , "Quantity of item 1 is " + quan2 , "<br>" , "Shipping adress is" + dc , "<br>")
document.write("total cost of your order is " , (price * 3 + price2 * 7 + dc),"<br>","<br>");

// Question 8.
document.write(" 'MARK SHEET:' ","<br>")
let total = 980;
let marks = 804;
document.write("Total marks: " , total , "<br>" , "Marks obtained: " , marks , "<br>" , "Percentage", (total / marks) * 1000 ,"<br>","<br>");

// Question 9.
let us = 104.80;
let saudi = 28;
let total2 = (10 * us) + (25 * saudi);
document.write("Total currency in PKR is ", total2 ,"<br>","<br>");

// Question 10.
let sum = (1 + 5) * (10 / 2);
document.write("The sum is ",sum ,"<br>","<br>");

// Question 11.
let year = 2016;
let birth = 1992;
document.write("your age is ", year - birth ,"<br>","<br>" );

// Question 12.
let radius = 20;
document.write("The Circumference is" , (2 * 3.142 * radius),"<br>");
document.write("The Area is" , (3.142 * 40),"<br>","<br>");

// Question 13.
let snack = "donut";
let age = 15;
let maxi = 65;
let amsnack = 3;
let yearsn = (age - maxi);
let last = (yearsn * 365 * amsnack); 
document.write("you will need ", last  , snack , " to last you until the ripe old age of ", maxi);


