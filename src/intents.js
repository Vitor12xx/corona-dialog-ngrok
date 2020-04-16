const utils = require('./utils');

module.exports = dialogflow => {
    dialogflow.intent('Boas vindas', conv => {
        console.log('Boas vindas')
        conv.add(utils.selectAny([
            'Olá, boas vindas ao CoronaBot!',
            'Oi, boas vindas ao CoronaBot!'
        ]));
        conv.ask('Em que posso te ajudar?');
    });

    dialogflow.intent('Exceção', conv => {
        console.log('Exceção')
        conv.add(utils.selectAny([
            'Lamento, mas não compreendi.',
            'Desculpe, mas não compreendi.',
            'Infelizmente, não captei o que deseja.',
            'Não consegui compreender, desculpe.'
        ]));
        conv.add('Por favor, poderia tentar novamente?');
    })
}