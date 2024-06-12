'use strict'

const Pairings = {
    OurCase: 'OurCase',
    BadCase: 'BadCase',
    NeutralCase: 'NeutralCase',
    Narcisoss: 'Narcisoss'
};


const signOptions = [
    { value: 'aries',       text: 'Овен' },
    { value: 'taurus',      text: 'Телець' },
    { value: 'gemini',      text: 'Близнюки' },
    { value: 'cancer',      text: 'Рак' },
    { value: 'leo',         text: 'Лев' },
    { value: 'virgo',       text: 'Діва' },
    { value: 'libra',       text: 'Терези' },
    { value: 'scorpio',     text: 'Скорпіон' },
    { value: 'sagittarius', text: 'Стрілець' },
    { value: 'capricorn',   text: 'Козоріг' },
    { value: 'aquarius',    text: 'Водолій' },
    { value: 'pisces',      text: 'Риби' },
];

const goodAnswers = [
    'Бооооже, сумісність 127%, вони житимуть у мирі і злагоді, такого взаєморозуміння ще ніхто не мав, кращої пари ну прооооосто не знайдеш! Прекрасна пара, янголи щоразу плачуть, коли бачать їх разом, а Афродіта особисто їх благословила на вічне кохання',
];


const badAnswers = [
    'Фу, ну брєд якийсь',
    '🤮🤮🤮🤮',
    'Нафіга, якщо є Рак-Риби? 😐',
    'Не доведи Господь',
    'Найжахливіша пара Всесвіту',
    'Настільки лоховська пара, що на конкурсі лохів займе друге місце, бо вони лохи',
    'Постійні суперечки, воно тобі треба?',
    'Я просто промовчу, бо це ні в які ворота 😐',
];

const neutralAnswers = [
    'Та кому то нафіг цікаво 🥱 Краще спробувати Рак-Риби',
];


window.onload = () => {
    const signOneField = document.getElementById('sign1');
    const signTwoField = document.getElementById('sign2');

    addOptions(signOneField, signOptions);
    addOptions(signTwoField, signOptions);

    const resultButton = document.getElementById('result-button');

    resultButton.onclick = () => {
        const signOne = signOneField.value;
        const signTwo = signTwoField.value;
    

        const pairing = getPairing(signOne, signTwo);

        let answer = 'error';

        switch(pairing) {
            case Pairings.OurCase:
                answer = getRandomElement(goodAnswers);
                break;
            case Pairings.BadCase:
                answer = getRandomElement(badAnswers);
                break;
            case Pairings.Narcisoss:
                answer = 'Ти що, нарцис? 😌💅';
                break;
            case Pairings.NeutralCase:
                answer = getRandomElement(neutralAnswers);
                break;
        }

        const resultsSection = document.getElementById('results');

        resultsSection.innerHTML = '<p>' + answer + '</p>';

        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function getPairing(signOne, signTwo) {
    if (signOne == 'cancer' && signTwo == 'cancer') {
        return Pairings.Narcisoss;
    }

    if (signOne == 'cancer' && signTwo == 'pisces') {
        return Pairings.OurCase;
    }

    if (signOne == 'pisces' && signTwo == 'cancer') {
        return Pairings.OurCase;
    }

    if (signOne == 'pisces' && signTwo != 'cancer') {
        return Pairings.BadCase;
    }


    if (signOne != 'cancer' && signTwo == 'pisces') {
        return Pairings.BadCase;
    }

    
    if (signOne == 'cancer' && signTwo != 'pisces') {
        return Pairings.BadCase;
    }

    
    if (signOne != 'pisces' && signTwo == 'cancer') {
        return Pairings.BadCase;
    }

    return Pairings.NeutralCase;
}


function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function addOptions(select, options) {
    options.forEach(optionData => {
        const option = document.createElement('option');

        option.value = optionData.value;
        option.textContent = optionData.text;

        select.appendChild(option);
    });
}
