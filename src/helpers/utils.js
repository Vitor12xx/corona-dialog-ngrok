const {Suggestion} = require('dialogflow-fulfillment')
const {removerAcentos} = require('./acento');

module.exports = {
    selectAny: (agent, phrases) => {
        return agent.add(phrases[Math.floor(Math.random() * phrases.length)])
    },
    penteFino: (function() {
        let url = 'v2/countries/'
        return function penteFino(local){
            local = local.toLowerCase()
                switch(local){
                case 'brazil':
                case 'brasil':
                    local = url + 'brazil'
                    break;
                case 'germany':
                case 'alemanha':
                    local = url + 'germany'
                    break;
                case 'egito':
                    local = url + 'egypt';
                    break;
                case 'finlândia':
                    local = url + 'finland'
                    break;
                case 'inglaterra':
                    local = url + 'england';
                    break;
                case 'holanda':
                    local = url + 'holland';
                    break;
                case 'grecia':
                case 'grécia':
                    local = url + 'greece';
                    break;
                case 'itália':
                case 'italia':
                    local = url + 'italy'
                    break;
                case 'afeganistão':
                    local = url + 'afghanistan'
                    break;
                case 'argélia':
                    local = url + 'algeria'
                    break;
                case 'islândia':
                    local = url + 'iceland';
                    break;
                case 'irã':
                    local = url + 'iran';
                    break;
                case 'hungria':
                    local = url + 'hungary';
                    break;
                case 'bélgica':
                    local = url + 'belgium'
                    break;
                case 'botsuana':
                    local = url + 'botswana'
                    break;
                case 'camarões':
                    local = url + 'cameroon'
                    break;
                case 'áfrica do sul':
                    local = url + 'south africa'
                    break;
                case 'camboja':
                    local = url + 'cambodia'
                    break;
                case 'croácia':
                    local = url + 'croatia'
                    break;
                case 'república checa':
                case 'tchecoslováquia':
                case 'checoslováquia':
                    local = url + 'czechia'
                    break;
                case 'franca':
                case 'frança': 
                    local = url + 'france';
                    break;
                case undefined:
                    local = 'all'
                    break;
                default:
                    local = url  + removerAcentos(local)
                    break;
            }
            return local
        }
    })(),
    suggestions: (agent, items) => {
        items.forEach(item => {
            agent.add(new Suggestion(item))
        });
    }
}