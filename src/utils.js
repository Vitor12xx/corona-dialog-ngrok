const {Suggestion} = require('dialogflow-fulfillment')

module.exports = {
    selectAny: (agent, phrases) => {
        return agent.add(phrases[Math.floor(Math.random() * phrases.length)])
    },
    
    suggestions: (agent, items) => {
        items.forEach(item => {
            agent.add(new Suggestion(item))
        });
    }
}