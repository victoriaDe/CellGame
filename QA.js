const questions = {
    1: {
        question: " каком году утонул Титаник?",
        answers: "1912",
    },
    2: {
        question: 'Крупнейшая технологическая компания в Южной Корее?',
        answers: 'Samsung'
    },
    3: {
        question: 'Столица Португалии?',
        answers: 'Лиссабон'
    },
    4: {
        question: 'Король поп-музыки?',
        answers: 'Майкл Джексон'
    },
    5: {
        question: 'Где выставлена ​​Мона Лиза Леонардо да Винчи?',
        answers: ['Лувр', 'Париж', 'Франция'],
    },
    6: {
        question: 'Где он находится Большой Сфинкс',
        answers: 'Египет'
    },
    7: {
        question: 'Где он находится Колизей?',
        answers: 'Италия' || 'Рим'
    },
    8: {
        question: 'Где он находится Ангкор-Ват?',
        answers: 'Камбоджа'
    },
    9: {
        question: 'Где находится Статуя Свободы?',
        answers: ['Соединенные Штаты Америки', 'США']
    },
    10: {
        question: 'Где он находится Тадж Махал?',
        answers: 'Индия'
    },
    11: {
        question: 'Где он находится Стоунхендж?',
        answers: 'Великобритания'
    },
    12: {
        question: ' Конец Первой мировой войны',
        answers: '1918',
    },
    13: {
        question: 'Конец Второй мировой войны?',
        answers: '1945'
    },
    14: {
        question: 'Как зовут лютоволк Джона Сноу?',
        answers: 'Призрак'
    },
    15: {
        question: 'Этот известный актер создал образ бродяжки Чарли, который стал первым комедийным образом в кино. Назовите имя актера?',
        answers: 'Чарли Чаплин'
    },
    16: {
        question: 'Какая кинопремия вручается в Каннах?',
        answers: 'Золотая пальмовая ветвь'
    },
    17: {
        question: 'Кто получил первую Нобелевская премию по физике?',
        answers: 'Вильгельм Рентген'
    },
    18: {
        question: 'Эта женщина в виде исключения дважды была лауреатом Нобелевской премии. Назовите ее.',
        answers: ['Мария Склодовская–Кюри', 'Склодовская–Кюри', 'Склодовская Кюри']
    },
    19: {
        question: 'Какое поле появляется вокруг любого предмета?',
        answers: 'Гравитационное'
    },
    20: {
        question: 'Центральная часть атома?',
        answers: 'Ядро'
    },
    21: {
        question: 'Какой газ является самым легким?',
        answers: 'водород'
    },
    22: {
        question: 'Как называется неделимая частица?',
        answers: 'атом'
    },
    23: {
        question: 'Какой химический элемент стал причиной смерти Наполеона?',
        answers: 'мышьяк'
    },
    24: {
        question: 'Какой химический элемент преобладает в составе каменного угля?',
        answers: ' Углерод'
    },
    25: {
        question: 'Что может путешествовать по миру, оставаясь в одном и том же углу?',
        answers: 'Почтовая марка'
    },
    26: {
        question: 'Какое молоко никто не пил?',
        answers: 'Птичье'
    },
    27: {
        question: 'Назовите самый известный балет П.И.Чайковского.',
        answers: 'Лебединое озеро'
    },
    28: {
        question: 'Король всех инструментов',
        answers: 'Рояль'
    },
    29: {
        question: 'У какой страны флаг в виде обычного зеленого полотна?',
        answers: ['Ливии', 'Ливия'],
    },
    30: {
        question: 'Как называется оболочка Земли, которая населена живыми организмами?',
        answers: 'Биосфера'
    },
    31: {
        question: 'Какое дерево называют символом России?',
        answers: 'Береза'
    },
    32: {
        question: 'В каком году произошла Чернобыльская катастрофа? ',
        answers: '1986',
    },
    33: {
        question: 'Какой цветок до сих пор считают символом Японии и самого Солнца?',
        answers: 'Хризантема'
    },
    34: {
        question: 'Как называют жителей города Смоленска в РФ?',
        answers: 'Смоляне'
    }, 35: {
        question: 'Согласно пословице, до какой столицы может довести язык?',
        answers: 'Киев'
    },
    36: {
        question: 'Самое соленое море в Мировом океане?',
        answers: 'Красное море'
    },
    37: {
        question: 'Как в современном языке называют государство Бирма?',
        answers: 'Мьянма'
    },
    38: {
        question: 'Сколько раз забрасывал невод в море старик из сказки «О рыбаке и рыбке»?',
        answers: '3'
    },
    39: {
        question: 'Какое сказочное животное одним ударом копыта могло выбрасывать золотые монеты?',
        answers: 'Антилопа'
    },
    40: {
        question: 'Какой волшебный предмет был у солдата из сказки Г. Х. Андерсена?',
        answers: 'Огниво'
    },
    41: {
        question: 'Туристы, приезжающие на Майорку, обязаны заплатить налог на...',
        answers: ['На солнце', 'солнце']
    },
    42: {
        question: 'Какой волшебный предмет был у солдата из сказки Г. Х. Андерсена?',
        answers: 'Огниво'
    },
    43: {
        question: 'Верблюды накапливают в горбах воду?',
        answers: 'Нет'
    },
    44: {
        question: 'Согласно легенде эта европейская столица была основана близнецами, вскормленными волчицей.',
        answers: 'Рим'
    },
    45: {
        question: 'Столицей какой страны является Белград?',
        answers: 'Сербия'
    },
    46: {
        question: 'Прага – столица Чехии. Братислава – столица Словакии. Какой город был столицей Чехословакии?',
        answers: 'Прага'
    },
    47: {
        question: 'Самая северная столица Европы?',
        answers: 'Рейкьявик'
    },
    48: {
        question: 'Какой город является столицей Швейцарии?(де-факто)',
        answers: 'Берн'
    },
    49: {
        question: 'Столица Азербайджана?',
        answers: 'Баку'
    },
    50: {
        question: 'Столица Мадагаскара?',
        answers: 'Антананариву'
    }
};

let questionContainer = document.getElementById('question__popup__container');
let questionContent = document.getElementById('question__popup__content');
let questionBtn = document.getElementById('question__btn__Check');
let questionInput = document.getElementById('answer_input');
let questionElement = document.getElementById('question');
let answerInput = document.getElementById('answer_input');
let question, shownAnswers, answers;

function setRandomQuestion() {
    let questionNumber = getRandomInt(0, 50);
    question = questions[questionNumber].question;
    let answersString = questions[questionNumber].answers.toString();
    shownAnswers = answersString.substring(0, answersString.indexOf(","));
    answers = questions[questionNumber].answers;
    questionElement.textContent = question;
}

function isCorrect(input) {
    let result = false;
    if (typeof answers === "string") {
        result = isEqualIgnoreCase(input, answers);
    } else {
        for (let i = 0; i < answers.length; i++) {
            console.log(answers)
            if (isEqualIgnoreCase(input, answers[i])) {
                result = true;
            }
        }
    }
    return result;
}

function isEqualIgnoreCase(string1, string2) {
    return string1.trim().toUpperCase() === string2.trim().toUpperCase();
}

