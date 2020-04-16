const request = require('request');

class CovidControllers {
    constructor() {
        this.apiUrl = 'https://brasil.io/api/dataset/covid19/caso/data'
    }

    getData(params) {
        request.get({
            url: this.apiUrl,
            qs: this.getParams(params),
            json: true
        }, (error, response) => {
            console.log(response.body);
        })
    }

    getParams(params) {
        console.log(params)
        let qs = {}
        qs.is_last = 'True'
        params.estados ? qs.state = params.estados : null
        params.cidades ? qs.city = params.cidades : null
        console.log(qs)
        return qs;
    }
}

module.exports = new CovidControllers()