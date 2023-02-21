export async function getAlchemyInfo(account) {
    const middleware = 'http://MIDDLEWARE-IP-ADDRESS:8081';
    const url = middleware + '/callalchemy';
    const options = {
      method: 'POST',
      body: JSON.stringify({
        account
      }),
       headers: {
        "content-type": "application/json"
       }
    };
    let response = await fetch(url, options)
    let output = await response.json();
    return output;
  }

