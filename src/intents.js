const {selectAny} = require('./utils')
const CovidController = require('./controllers/CovidController')

module.exports = {
    'Boas vindas': (agent) => {
        selectAny(agent, [
            'Olá! 👋',
            'Oi! 👋'
        ])
        agent.add('Este canal foi criado para verificar sintomas e esclarecer as suas dúvidas sobre o novo coronavírus (COVID-19).')
        agent.add('Lembrando que esta é uma ferramenta de auxílio.')
        agent.add('Ela busca a melhor orientação para você, caso precise de um exame médico presencial e NÃO É uma ferramenta de diagnóstico.')
        agent.add('Em que posso ajudar?')
    },

    'Procurar dados por estado': (agent) => {
        agent.add('Teste')
        CovidController.getData(agent.parameters)
    },

    'Teste': (agent) => {
        agent.add('Teste')
    },

    'Exceção': (agent) => {
        selectAny(agent, [
            'Me desculpe, não entendi',
            'Acho que não entendi',
            'Não sei sobre isso'
        ])
        agent.add('Por favor, você poderia tentar de novo?')
    },
}