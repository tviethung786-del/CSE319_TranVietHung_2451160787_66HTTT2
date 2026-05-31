// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
  return (value) => {
    let result = value;

    for (const fn of fns) {
      result = fn(result);
    }

    return result;
  };
}

const process = pipe(
  (x) => x * 2,
  (x) => x + 10,
  (x) => x.toString(),
  (x) => `Result: ${x}`
);

console.log(process(5));

// 2. memoize() — Cache kết quả
function memoize(fn) {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log("Calculating...");

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce((text) => {
  console.log("Search:", text);
}, 500);

search("i");
search("ip");
search("iph");
search("iphone");

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
  let attempt = 1;

  while (attempt <= maxAttempts) {
    try {
      return await fn();
    } catch (error) {
      console.log(`Attempt ${attempt} failed: ${error.message}`);

      if (attempt === maxAttempts) {
        throw new Error("Retry limit exceeded");
      }

      attempt++;
    }
  }
}