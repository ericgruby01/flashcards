const generateDate = (year, month, day) => {
    const mes = Math.floor(Math.random() * 11);
    const dia = Math.floor(Math.random() * 31);
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    let date = new Date(year||2018, month||mes, day||dia);
    date.setHours(hour);
    date.setMinutes(minute);
    return date.getTime()
}

export const HTML = {
	'html_0': {
        id: 'html_0',
        deck: 'deck_1',
        question: 'The <head> tag is visible to the person viewing the page?',
        answer: 'No! <head> is a metadata container and it\'s not visible.',
        created_at: 1544006340000,
        deleted: false
    },
	'html_1': {
        id: 'html_1',
        deck: 'deck_1',
        question: 'A div element can only contain other divs inside it.',
        answer: 'This is false. <div> can contain any element inside the <body> tag.',
        created_at: 1543986060000,
        deleted: false
    },
	'html_2': {
        id: 'html_2',
        deck: 'deck_1',
        question: '<ul> elements display a list of items with numbers beside every item.',
        answer: 'This is false. <ul> stands for "unordered list" and display bullet points instead numbers.',
        created_at: 1543975980000,
        deleted: false
    },
	'html_3': {
        id: 'html_3',
        deck: 'deck_1',
        question: 'A <table> element can contain <thead>, <tbody> and <tfoot> elements.',
        answer: 'Yes! This elements are default to create a table layout.',
        created_at: 1544034120000,
        deleted: false
    },
	'html_4': {
        id: 'html_4',
        deck: 'deck_1',
        question: '<br /> elements results in a horizontal line on the page, and <hr /> perform a line break.',
        answer: 'No! This card is incorrect.',
        created_at: 1543986120000,
        deleted: false
    },
	'html_5': {
        id: 'html_5',
        deck: 'deck_1',
        question: 'The following tag: <a link="http://google.com.br">Link</a> will NOT work as expected.',
        answer: 'Yes! This card is Correct!',
        created_at: 1544014320000,
        deleted: false
    },
}



export const REACT_REDUX = {
	'react_redux_0': {
        id: 'react_redux_0',
        deck: 'deck_2',
        question: 'On React, you should always give preference to mutate data directly to avoid errors and bugs.',
        answer: 'No! This card is incorrect.',
        created_at: 1543919940000,
        deleted: false
    },
	'react_redux_1': {
        id: 'react_redux_1',
        deck: 'deck_2',
        question: 'Redux is a state container tool designed exclusively for React.',
        answer: 'No! This card is incorrect.',
        created_at: 1543901880000,
        deleted: false
    },
	'react_redux_2': {
        id: 'react_redux_2',
        deck: 'deck_2',
        question: 'JSX tags are not HTML tags.',
        answer: 'Yes! This card is Correct!',
        created_at: 1543958700000,
        deleted: false
    },
    'react_redux_3': {
        id: 'react_redux_3',
        deck: 'deck_2',
        question: 'High order components can be used to decorate any component with his props and state.',
        answer: 'Yes! This card is Correct!',
        created_at: 1543971360000,
        deleted: false
    },
    'react_redux_4': {
        id: 'react_redux_4',
        deck: 'deck_2',
        question: 'It\'s a good practice to build an app using as many reusable components as possible.' ,
        answer: 'Yes! This card is Correct!',
        created_at: 1543944780000,
        deleted: false
    },
    'react_redux_5': {
        id: 'react_redux_5',
        deck: 'deck_2',
        question: 'Components can receive another components as props.',
        answer: 'Yes! This card is Correct!',
        created_at: 1543896600000,
        deleted: false
    },
    'react_redux_6': {
        id: 'react_redux_6',
        deck: 'deck_2',
        question: 'Redux middlewares are only used for logging and it\'s not recommended to use them in production.',
        answer: 'No! This card is incorrect.',
        created_at: 1543966320000,
        deleted: false
    },
    'react_redux_7': {
        id: 'react_redux_7',
        deck: 'deck_2',
        question: 'It\'s NOT possible to render components outside the app root container declared on \'ReactDOM.render\'.',
        answer: 'No! This card is incorrect.',
        created_at: 1543953900000,
        deleted: false
    },
    'react_redux_8': {
        id: 'react_redux_8',
        deck: 'deck_2',
        question: '\'react-redux\' is a third-party library that provides functions to connect React components to a Redux store.',
        answer: 'Yes! This card is Correct!',
        created_at: 1543937460000,
        deleted: false
    },
    'react_redux_9': {
        id: 'react_redux_9',
        deck: 'deck_2',
        question: 'Components can\'t connect to multiple Redux stores.',
        answer: 'No! This card is incorrect.',
        created_at: 1543930260000,
        deleted: false
    },
}

export const JS = {
	'js_0': {
        id: 'js_0',
        deck: 'deck_3',
        question: 'The javascript console is accessible through most of modern browsers.',
        answer: 'Yes! This card is Correct!',
        created_at: 1543906080000,
        deleted: false
    },
	'js_1': {
        id: 'js_1',
        deck: 'deck_3',
        question: '\'var\', \'let\' and \'const\' are used to declare variables which can be changed and redeclared anytime on the code.',
        answer: 'No! This card is incorrect.',
        created_at: 1543919280000,
        deleted: false
    },
	'js_2': {
        id: 'js_2',
        deck: 'deck_3',
        question: '\'map\', \'reduce\' and \'sort\' are functions that do not mutate it\'s arrays.',
        answer: 'No! This card is incorrect.',
        created_at: 1543967280000,
        deleted: false
    },
    'js_3': {
        id: 'js_3',
        deck: 'deck_3',
        question: '\'Object.entries(some_object)\' will result an array.',
        answer: 'Yes! This card is Correct!',
        created_at: 1543970640000,
        deleted: false
    },
    'js_4': {
        id: 'js_4',
        deck: 'deck_3',
        question: '"document.querySelectorAll(\'a\')[0].style.color = \'red\'" will turn all <a> tags red.',
        answer: 'No! This card is incorrect.',
        created_at: 1543920660000,
        deleted: false
    },
    'js_5': {
        id: 'js_5',
        deck: 'deck_3',
        question: '"typeof null === \'object\'" is true.',
        answer: 'Yes! This card is Correct!',
        created_at: 1543944000000,
        deleted: false
    },
    'js_6': {
        id: 'js_6',
        deck: 'deck_3',
        question: 'Executing this single line of code: "document.children[0].innerHTML.replace(/foo/g, \'bar\')" will replace all \'foo\' words to \'bar\' on the screen.',
        answer: 'No! This card is incorrect.',
        created_at: 1543927440000,
        deleted: false
    },
    'js_7': {
        id: 'js_7',
        deck: 'deck_3',
        question: '"Math.random()" will result a random number between 0 and 10.',
        answer: 'No! This card is incorrect.',
        created_at: 1543908060000,
        deleted: false
    },
    'js_8': {
        id: 'js_8',
        deck: 'deck_3',
        question: 'Javascript Proxies are mostly used to add custom get and set functions to objects.',
        answer: 'Yes! This card is Correct!',
        created_at: 1543898220000,
        deleted: false
    },
    'js_9': {
        id: 'js_9',
        deck: 'deck_3',
        question: '"JSON.parse()" will transform any object or array into a string.',
        answer: 'No! This card is incorrect.',
        created_at: 1543914780000,
        deleted: false
    },
}