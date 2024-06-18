async function sayJoke(apiUrl, jokeId) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.hasOwnProperty('jokes')) {
            throw new Error(`No jokes at url: ${apiUrl}`);
        }

        const joke = data.jokes.find(joke => joke.id == jokeId);

        if (!joke) {
            throw new Error(`No jokes found id: ${jokeId}`);
        }

        return {
            saySetup: () => joke.setup,
            sayPunchLine: () => joke.punchLine
        };
    } catch (err) {
        throw new Error(err.message);
    }
}

// sayJoke('https://official-joke-api.appspot.com/jokes/ten', 1)
//     .then(jokeAPI => {
//         console.log(jokeAPI.saySetup());
//         console.log(jokeAPI.sayPunchLine());
//     }).catch(err => {
//         console.log(err.message);
//     });