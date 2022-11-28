# week1 code challenge.

## Learning Goals

> Calculate student grade.
> calculate the speed of a car.
> calculate the Net salary.

Instructions.
 1. Create a repository on your Github account.
 2. Git clone and paste the link on the terminal. Create a folder with the three files for the code challenges.
 3. Use javascript to solve the challenges.
 4. Git add and git push  to the github when done.
 5. Submit the repository link for grading on the canvas.

## introduction.
The code challenge consists of three challenges: Net salary calculator ,speedcar calculator and the student marks calculator.
In this case, we are going to create each file for the three challenges.

For the student marks calculator, we are going to name it as **`studentMarks.js`**
For the speedcar calculator, we are going to name it as  **`speedcar.js`**
For the student marks calculator, we are going to name it as **`netSalary.js`**


## The `studentMarks.js` file

This file shows how we will get the output as the student grade after indicating the studenrt marks. We then proceed to declaring a cont variable to the student marks as follows;


```js
 `let studentMarks = 67`
 function checkGrade(studentMarks){
    console.log(checkGrade(studentMarks));
 }
 ```
    
  This shows that we have initialized the the let variable and then we proceed to providing the value of student marks to be 67.
The condition for the above statement shows that our output student grade should be of `B`.


Let's take a look at what's happening in our conditional statement using debugger. Run
`node studentMarks.js` in the terminal to start the debugger you should see the  grade `B`
Lets say i change my student marks to be `80`, the student grade will eventually change because of the conditional statement and the grade will therefore be  of grade `A`


For any studentMarks  above `100`.It should print `Enter a valid grade`. This shows that we should not enter marks greater than 100.



## The `speedCar.js` file

Here we are checking the speed of a car on different conditions. We declare the const variable to the speedcar as folows;

```js
let speedCar = 85
function checkSpeedCar(speedCar){
console.log(checkSpeedCar(speedCar));
}
```
Here, we have provided the value of the speedcar to be `85` The condition in our file was to bring out the number of points one gets according to the speed.Our speed limit was `70`,and for every speed of `5 km/s` above the speed limit we add one point. For instance in our case  `85` is past our speed limit and this will print `Points:3` as our output.


Let's take a look at what's happening in our conditional statement using debugger. Run
`node speedCar.js` in the terminal to start the debugger you should see the points as `Points:3`
Lets say i change my speedcar to be `80`, the speedCar points will  change because of the conditional statement and the points will be `Points:2`

For any speedcar printing more than 12 points its output will be `License suspended`. The speedCar having more than 12 points according to the calculation is `135` which has 13 points.In this case if we use the speedCar of 135 we will have the `License suspended`


## The `netSalary.js` file

    This file consist of various calculations  and first we are going to calculate how get the gross income using the allowances and the basic salary: This is done as follows;
```js
function grossIncome(basicSalary, ...allowances){
    let total = basicSalary
    for(let allowance of allowances){
        total += allowance
    }
 return total
}
```
    The return total now is our gross income.
    Our next step is calculating the NHIF gross pay according to the conditional statement given. 
```js
function NHIF(grossPay){
    if (grossPay <= 5999){
        return 150
    }
    }
```
Our conditional statement continues down the line as indicated on our `netSalary.js` file and the return depends on the gross pay.

We are also going to calculate the NHIF ppensionable pay by;
```js
function NSSF(pensionablePay){
    return pensionablePay * 0.06
 }
```
The return pensionable pay is multiplied by 6% which is 0.06

This is followed by the taxable pay calculated as follows;
```JS
function taxablePay(grossIncome, ...deductions){
    for(let deduction of deductions){
        grossIncome -=deduction
    
        return grossIncome
    }     
}
```
Our next step is calculating our taxable paye using the conditions provided and its rates.
```js
function PAYE(taxablepay){
    if(taxablepay <= 24000){
        return taxablepay * 0.1
    }
    else if(taxablepay <= 32333){
        return taxablepay * 0.25
    }
    else if(taxablepay > 32333){
        return taxablepay * 0.3
    }
}
```
Finally we will have to get the netPay or in other words it is called takeHomePay by;
```js
function takeHomePay(taxablepay, paye){
    return taxablepay - paye

}
```
This project was done by Sharon chepkirui and by contributing the contributions will be under license.

   


