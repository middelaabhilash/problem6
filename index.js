const readline = require('readline');

const Solution = () => {
  const inputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  inputInterface.question('Enter the first number: ', (firstInput) => {
    inputInterface.question('Enter the second number: ', (secondInput) => {
      const firstNumber = Number(firstInput);
      const secondNumber = Number(secondInput);
      console.log(`The maximum of the two numbers is: ${Math.max(firstNumber, secondNumber)}`);
      inputInterface.close();
    });
  });
};

Solution();
module.exports = Solution;
