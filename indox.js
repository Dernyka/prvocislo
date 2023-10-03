function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}


function generatePrimes() {
    const primeList = document.getElementById("primeList");
    primeList.innerHTML = ""; 

    for (let i = 2; i <= 1000; i++) {
        if (isPrime(i)) {
            const listItem = document.createElement("li");
            listItem.textContent = i;
            primeList.appendChild(listItem);
        }
    }
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generatePrimes);
