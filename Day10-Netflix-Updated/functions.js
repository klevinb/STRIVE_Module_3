const url = "https://striveschool.herokuapp.com/api/movies/"
const userAndPass = "user16:c9WEUxMS294hN6fF"
const headers = new Headers()
headers.set('Authorization', 'Basic ' + btoa(userAndPass))
headers.set("Content-Type", "application/json")

const getMovies = async () =>{
    let response = await fetch(url,{
        headers,
    })
    return await response.json()
}
const getSpecificMovie = async (id) =>{
    let response = await fetch(url+"/id/"+id,{
        headers,
    })
    return await response.json()
}

const getMoviesCategory= async (string) =>{
    let response = await fetch(url+string,{
        headers,
    })
    return await response.json()
}

const addMovie = async (movie) =>{
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(movie),
        headers,
    })
    return response
}

const deleteMovie = async (movie) =>{
    let response = await fetch(url + movie, {
        method: "DELETE",
        headers,
    })
    return response
}
