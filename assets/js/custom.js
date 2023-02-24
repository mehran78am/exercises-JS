//fibonacci
const fibNumber = document.querySelector("#fib-number");
const fibBtn = document.querySelector("#fib-btn");
const fib = document.querySelector(".fib-ser");
fibBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    fn = fibNumber.value;
    if (fn <= 0) {
        fib.innerHTML = "Invalid Number!";
    } else {

        fibonacci(fn);
    }
});

function fibonacci(a) {
    if (a == 1) {
        fib.innerHTML = 0;
    } else if (a > 1) {
        fib.innerHTML = 0;
        fibArr = [0, 1];
        for (let i = 2; i <= a; i++) {
            fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
            fib.innerHTML += " , " + fibArr[i];
        }
    }
}
//prime number
const primeBtn = document.querySelector("#prime-btn");
const primeNumber = document.querySelector("#prime-number");
const prime = document.querySelector(".prime");
primeBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    result = primeNumber.value;
    isPrime(result);
});

function isPrime(a) {
    let sum = 0;
    if (a <= 1) {
        prime.innerHTML = `${a} is not prime`;
    } else if (a == 2) {
        prime.innerHTML = `${a} is prime`;
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                sum++;
            }
            if (sum >= 1) {
                prime.innerHTML = `${a} is not prime`;
            } else {
                prime.innerHTML = `${a} is  prime`;
            }
        }
    }
}
//factorial
const factNumber = document.querySelector("#fact-number");
const factBtn = document.querySelector("#fact-btn");
const fact = document.querySelector(".fact");
factBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    fc = factNumber.value;
    factorial(fc);
});

function factorial(a) {
    answer = 1;
    if (a == 0 || a == 1) {
        fact.innerHTML = `${a}! = ${answer}`;
    } else {
        for (let i = 1; i <= a; i++) {
            answer *= i;
        }
        fact.innerHTML = `${a}! = ${answer}`;
    }
}
//leap
const leapNumber = document.querySelector("#leap-number");
const leapBtn = document.querySelector("#leap-btn");
const leap = document.querySelector(".leap");
leapBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    result = leapNumber.value;
    var leapYear = ((result % 4 == 0) && (result % 100 != 0)
        || (result % 400 == 0)) ? `${result} is a leap year` : `${result} is not a leap year`;
    leap.innerHTML = leapYear;
});
//reverse
const reverseNumber = document.querySelector("#reverse-number");
const reverseBtn = document.querySelector("#reverse-btn");
const reverse = document.querySelector(".reverse");
reverseBtn.addEventListener("click", function (e) {
    e.preventDefault();
    result = reverseNumber.value;
    revNum(result);
});

function revNum(a) {
    let rev = 0;
    while (a != 0) {
        lastDigit = a % 10;
        rev = rev * 10 + lastDigit;
        a = Math.floor(a / 10);
        if (rev < 10000000000) {
            reverse.innerHTML = `0${rev}`;

        } else {
            reverse.innerHTML = ` ${rev}`;

        }
    }

}