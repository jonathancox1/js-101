function tipAmount(bill, service) {
    if (service == 'good') {
        console.log(bill * .20)
    } else if (service == 'fair') {
        console.log(bill * .15)
    } else if (service == 'bad') {
        console.log(bill * .10) 
    }
}

tipAmount(100, 'good')
tipAmount(100, 'fair')
tipAmount(100, 'bad')