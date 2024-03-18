let number = 15;
let taskResult;
if(numder % 3 == 0) {taskResult = 'Fizz'};
if(numder % 5 == 0) {taskResult = 'Buzz'};
if((numder % 3 == 0) && (numder % 5 == 0)) {taskResult = 'FizzBuzz'};
if((numder % 3 != 0) && (numder % 5 != 0)) {taskResult = numder};
console.log(taskResult);