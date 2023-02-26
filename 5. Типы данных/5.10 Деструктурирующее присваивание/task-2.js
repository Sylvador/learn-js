let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let maxName = null;
  let maxSalary = 0;
  Object.entries(salaries).forEach(([name, salary]) => {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  })
  return maxName;
}