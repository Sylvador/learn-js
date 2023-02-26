function betterSumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}