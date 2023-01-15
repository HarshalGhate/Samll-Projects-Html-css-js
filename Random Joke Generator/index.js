const btnEl = document.getElementById('btn')

const jokeEl = document.getElementById('joke')

const ApiKey = "L33CFUN9RaGb7Y88xB0avw==rA6bWd5OWI1jlGc5"

const options = {
    method: 'GET',
    headers: {
        "X-Api-key": ApiKey,
    },
};

const ApiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke() {

    try {
        jokeEl.innerHTML = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...."

        const response = await fetch(ApiUrl, options)
        const data = await response.json()
        // console.log(data[0].joke);

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
    }


}
btnEl.addEventListener('click', getJoke)