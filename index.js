const { Input, AutoComplete } = require('enquirer');


const CC = require('currency-converter-lt');
let currencyConverter = new CC();

const askAmount = new Input({
    name: 'amount',
    message: 'Convert Amount? Ex. 0.76'
});


const askFrom = new AutoComplete({
    name: 'from',
    message: 'Convert from?',
    limit: 10,
    initial: 1,
    choices: [
        'USD',
        'EUR',
        'CAD',
    ]
});

const askTo = new AutoComplete({
    name: 'to',
    message: 'Convert to?',
    limit: 10,
    initial: 1,
    choices: [
        'USD',
        'EUR',
        'CAD',
    ]
});

const run = async () => {
    const amount = await askAmount.run();
    val = Number(amount);
    const from = await askFrom.run();
    const to = await askTo.run();

    currencyConverter.from(from).to(to).amount(val).convert().then((response) => {
        console.log(response)
    })
}

run();