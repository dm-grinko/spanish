const colors = require('colors');

const getWordForms = (infinitive: string) => {
    const ending = infinitive.slice(-2);
    const root = infinitive.slice(0, -2);
    switch (ending) {
        case 'ar':
            return {
                yo: `${root}o`,
                tu: `${root}as`,
                usted: `${root}a`,
                el: `${root}a`,
                ella: `${root}a`,
                nosotros: `${root}amos`,
                vosotros: `${root}ais`,
                ustedes: `${root}an`,
                ellos: `${root}an`,
            }
    }
}

const getPhrase = (pronoun: string, infinitive: string): string | any => {
    const forms = getWordForms(infinitive);
    return `${pronoun} ${forms[pronoun]}`;
};

const pronouns = [
    'yo',
    'tu',
    'usted',
    'el',
    'ella',
    'nosotros',
    'vosotros',
    'ustedes',
    'ellos',
];

const infinitives = [
    'hablar',
    'trabajar',
    'descansar',
    'cantar',
    'bailar',
    'ayudar',
    'llamar',
    'estudiar',
    'preguntar',
    'contestar',
];

const infinitivesEng = {
    hablar: 'talk',
    trabajar: 'work',
    descansar: 'rest',
    cantar: 'sing',
    bailar: 'dance',
    ayudar: 'help',
    llamar: 'call',
    estudiar: 'learn',
};

const pronounsEng = {
    yo: 'I',
    tu: 'You',
    usted: 'You (single)',
    el: 'He',
    ella: 'She',
    nosotros: 'We',
    vosotros: 'You (plural)',
    ustedes: 'You (plural, polite)',
    ellos: 'They',
};

const getRandomPhrase = () => {
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const infinitive = infinitives[Math.floor(Math.random() * infinitives.length)];
    const phrase = getPhrase(pronoun, infinitive);
    console.log(colors.green(phrase));
    setTimeout(() => {
        console.log(colors.red(`${pronounsEng[pronoun]} ${infinitivesEng[infinitive]}${['He', 'She'].includes(pronounsEng[pronoun]) ? 's': ''}`));
        console.log('=======================');
    }, 5000);
    return phrase;
}

setInterval(() => {
    getRandomPhrase();
}, 10000)


module.exports = {
    getPhrase,
    getRandomPhrase,
}