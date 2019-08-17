const fetch = require('node-fetch');

const getTatooineResidents = () => 
     fetch("https://swapi.co/api/planets/1/")
        .then(response => response.json())
        .then(json => json.residents)
        .catch(err => console.log(err))


const promiseMeAString = (promiseString) => new Promise((resolve, reject) => {
    if (typeof promiseString === "string") {
        resolve("You kept the Promise!")
    }
    if (promiseString  === null) {
        reject("You have failed me!")
    }
})

module.exports = { getTatooineResidents, promiseMeAString }