const fetch = require('node-fetch');
const {penteFino} = require('./helpers/utils');

module.exports = {
	'casos.hoje.local': (agent) => {
		let localName = agent.parameters.location.country
	   let local = localName
	   
	   local = penteFino(local)
   
	   return fetch(`https://corona.lmao.ninja/${local}`)
			.then(resposta => resposta.json())
			.then(response => {
				agent.add(`Os casos no dia de hoje em ${localName} são: ${response['todayCases']}`)

			})
			.catch(err => {
				 if(err.type == 'invalid-json')
					 console.log('Erro na requisição', err)
			})
	},
	'casos.hoje.mundo': (agent) => {		
		return fetch(`https://corona.lmao.ninja/all`)
			.then(resposta => resposta.json())
			.then(response => {
				agent.add(`Os casos mundiais no dia de hoje são: ${response['todayCases']}`)
	
			})
			.catch(err => {
				if(err.type == 'invalid-json')
					console.log('Erro na requisição', err)
			})
	},
	'casos.total.local': (agent) => {
		let localName = agent.parameters.location.country
		let local = localName
		
		local = penteFino(local)
	
		return fetch(`https://corona.lmao.ninja/${local}`)
			.then(resposta => resposta.json())
			.then(response => {
				agent.add(`Número de casos em ${localName} são: ${response['cases']}`)

			})
			.catch(err => {
					if(err.type == 'invalid-json')
						console.log('Erro na requisição', err)
			})
	},
	'casos.total.mundo': (agent) => {		
		return fetch(`https://corona.lmao.ninja/all`)
			.then(resposta => resposta.json())
			.then(response => {
				agent.add(`Número de casos mundiais totais são: ${response['cases']}`)
	
			})
			.catch(err => {
				if(err.type == 'invalid-json')
					console.log('Erro na requisição', err)
			})
	},
	'curados.total.local': (agent) => {
		let localName = agent.parameters.location.country
		let local = localName
		
		local = penteFino(local)
	
		return fetch(`https://corona.lmao.ninja/${local}`)
			.then(resposta => resposta.json())
			.then(response => {
				agent.add(`Casos recuperados em ${localName} são: ${response['recovered']}`)

			})
			.catch(err => {
					if(err.type == 'invalid-json')
						console.log('Erro na requisição', err)
			})
	},
	'curados.total.mundo': (agent) => {		
		return fetch(`https://corona.lmao.ninja/all`)
			.then(resposta => resposta.json())
			.then(response => {
				agent.add(`Casos recuperados no mundo todo são: ${response['recovered']}`)
	
			})
			.catch(err => {
				if(err.type == 'invalid-json')
					console.log('Erro na requisição', err)
			})
	},
	'mortes.total.local': (agent) => {
		let localName = agent.parameters.location.country
		let local = localName
		
		local = penteFino(local)
	
		return fetch(`https://corona.lmao.ninja/${local}`)
			.then(resposta => resposta.json())
			.then(response => {
				agent.add(`Número de óbitos em ${localName} são: ${response['deaths']}`)

			})
			.catch(err => {
					if(err.type == 'invalid-json')
						console.log('Erro na requisição', err)
			})
	},
	'mortes.total.mundo': (agent) => {		
		return fetch(`https://corona.lmao.ninja/all`)
			.then(resposta => resposta.json())
			.then(response => {
				agent.add(`O número de óbitos totais é: ${response['deaths']}`)
	
			})
			.catch(err => {
				if(err.type == 'invalid-json')
					console.log('Erro na requisição', err)
			})
	},
}