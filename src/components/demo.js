//prime no. finder
function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  let maxDiv = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= maxDiv; i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

//example usage
console.log(isPrime(11)); //true
console.log("Thisb no. is prime or not", isPrime(12)); //false
