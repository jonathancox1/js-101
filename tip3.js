function tipAmount(bill, service, split) {
    if (service == 'good') {
        console.log(((bill * .20) + bill) / split);
    } else if (service == 'fair') {
        console.log(((bill * .15) + bill) / split);
    } else if (service == 'bad') {
        console.log(((bill * .10) + bill) / split);
    }
}

tipAmount(100, 'good', 5)
tipAmount(100, 'fair', 2)
tipAmount(100, 'bad', 1)