const fetch = require('node-fetch');

const callAlchemy = async (wallet) => {
    const backendUrl = 'http://BACKEND-IP-ADDRESS:8082';
    const url = backendUrl + '/callalchemy';
    const options = {
       method: "POST",
       body: JSON.stringify({wallet}),
       headers: {
           "content-type": "application/json"
       }
    }
    let response = await fetch(url, options);
    let output = await response.json();
    return output;
   }

module.exports = { callAlchemy };