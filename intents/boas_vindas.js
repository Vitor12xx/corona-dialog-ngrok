module.exports = df => {
    df.intent('Boas vindas', conv => {
        console.log(conv)
        return new Promise(async (resolve, reject) => {
            conv.ask('Teste');
            return resolve();
        })
    })
}