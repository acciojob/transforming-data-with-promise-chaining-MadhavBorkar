//your JS code here. If required.
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

button.onclick = function () {
  const inputValue = Number(document.getElementById("ip").value);

  // Initial Promise (2 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = `Result: ${inputValue}`;
      resolve(inputValue);
    }, 2000);
  })
    // Second Promise: multiply by 2 (2 seconds)
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value * 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    // Third Promise: subtract 3 (1 second)
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value - 3;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Fourth Promise: divide by 2 (1 second)
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value / 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Fifth Promise: add 10 (1 second)
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const finalResult = value + 10;
          outputDiv.textContent = `Final Result: ${finalResult}`;
          resolve(finalResult);
        }, 1000);
      });
    });
};
