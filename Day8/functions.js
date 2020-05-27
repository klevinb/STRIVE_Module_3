const url = "https://striveschool.herokuapp.com/api/product/"
const user = "user16"
const password = "c9WEUxMS294hN6fF"
const headers = new Headers()
headers.set('Authorization', 'Basic ' + btoa(user + ":" + password))
headers.set("Content-Type", "application/json")

getData = async () =>{
    let response = await fetch(url,{
        headers,
    })
    return await response.json()
}

sendProduct = async (product) =>{
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(product),
        headers: headers
      });
    return response
}